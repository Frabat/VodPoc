import React from 'react';
import { ScrollView } from 'react-native';
import MainCarousel from './components/Carousel';
import LoadingScreen from './components/LoadingScreen';
import MovieList from './components/MovieList';
import Services from './components/Services';


export default class HomeScreen extends React.Component {
  state = {
    isLoading: true,
    config: [],
  };
  services = new Services();

  componentDidMount() {
    this.services.getConfig().then(result => {
      console.log('ConfigResult ', result);

      this.setState({
        isLoading: false,
        config: result.content[0].layers.configuration.config,
        // section:{sectionName: result.content[0].layers.configuration.config[0].sectionName}
      });
      // console.log("It's a me, il risultato", this.state.sectionName)
    });
  }
  
  render() {
    const mainData = this.state.config.length >0 ? this.state.config[0] : [];
    console.log('config ->', this.state.config[0]);
    const mainDataPopular = this.state.config.length > 0 ? this.state.config[0].section.strips[1] : [];
    console.log('MainData POPUPAR = ', mainDataPopular)
    const mainDataBrandNew = this.state.config.length > 0 ?this.state.config[0].section.strips[2] : []
    console.log("MAINDATA BRANDNEW = ", mainDataBrandNew)
    return !this.state.isLoading  ? (
      <>
      
        <ScrollView>
          <MainCarousel data={mainData} />
           <MovieList data={mainDataPopular}  />
          <MovieList data={mainDataBrandNew} /> 
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
