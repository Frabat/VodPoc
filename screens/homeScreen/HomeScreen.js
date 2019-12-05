import React from 'react';
import {ScrollView} from 'react-native';
import MainCarousel from '../../components/Carousel';
import MovieList from '../../components/MovieList';
import Services from '../../components/Services';
import LoadingScreen from '../../components/LoadingScreen';

export default class HomeScreen extends React.Component {
  services = new Services();

  state = {
    isLoading: true,
    config: [],
  };

  // componentDidMount() {
  //   this.services.getConfig().then(result => {
  //     console.log("Il risultato della fetch é: ",result)
  //     // this.setState({
  //     //   isLoading: false,
  //     //   config: result.content[0].layers.configuration.config
  //     // });
  //   });
  // }
  componentDidMount() {
    this.services.getConfig().then(result => {
      console.log(result);
      this.setState({
        isLoading: false,
      });
    });
  }
  render() {
    const mainData = this.state.config.length > 0 ? this.state.config[0] : [];

    const mainDataPopular =
      this.state.config.length > 0
        ? this.state.config[0].section.strips[1]
        : [];

    const mainDataBrandNew =
      this.state.config.length > 0
        ? this.state.config[0].section.strips[2]
        : [];
    console.log('Nello state di homescreen ottengo : ', this.state.config);
    console.log('MainData', mainData),
      console.log('MainDataPopular', mainDataPopular),
      console.log('MainDataBrandNew', mainDataBrandNew);

    return !this.state.isLoading ? (
      <>
        <ScrollView>
          <MainCarousel data={mainData} />
          <MovieList data={mainDataPopular} />
          <MovieList data={mainDataBrandNew} />
        </ScrollView>
      </>
    ) : (
      <LoadingScreen />
    );
  }
}
