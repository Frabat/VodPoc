import React from 'react';
import {ScrollView} from 'react-native';
import MainCarousel from './components/Carousel';
import LoadingScreen from './components/LoadingScreen';
import MovieListBrandNew from './components/MovieListBrandNew';
import MovieListPopular from './components/MovieListPopular';
import Services from './components/Services';
import {View} from 'native-base';

export default class HomeScreen extends React.Component {
  state = {
    isLoading: true,
    config: [],
  };
  services = new Services();

  componentDidMount() {
    this.services.getConfig().then(result => {
      console.log('Mamma mia che palle', result);

      this.setState({
        isLoading: false,
        config: result.content[0].layers.configuration.config,
        // section:{sectionName: result.content[0].layers.configuration.config[0].sectionName}
      });
      // console.log("It's a me, il risultato", this.state.sectionName)
    });
  }
  render() {
    console.log('config ->', this.state.config);
    const mainData = this.state.config.length > 0 ? this.state.config[0] : [];
    return !this.state.isLoading ? (
      <>
      
        <ScrollView>
          <MainCarousel data={mainData} />
          <MovieListPopular data={mainData} />
          <MovieListBrandNew data={mainData} />
        </ScrollView>
      </>
    ) : (
      <>
       <LoadingScreen />
      </>
    );
  }

  // <View>
  //   <Text>
  //     NO.
  //   </Text>
  // </View>
}
