import {Button, Header, Icon, Left, Body} from 'native-base';
import React from 'react';
import {ScrollView, View} from 'react-native';
import MainCarousel from '../components/Carousel';
import LoadingScreen from '../components/LoadingScreen';
import MovieList from '../components/MovieList';
import Services from '../components/Services';
export default class HomeScreen extends React.Component {
  state = {
    isLoading: true,
    config: [],
  };
  services = new Services();

  componentDidMount() {
    this.services.getConfig().then(result => {
      this.setState({
        isLoading: false,
        config: result.content[0].layers.configuration.config,
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

    return !this.state.isLoading ? (
      <>
        <View>
          <Header transparent>
            <Left>
              <Button transparent>
                <Icon
                  name="menu"
                  style = {{color : "black"}}
                  onPress={() => this.props.navigation.openDrawer()}
                />
              </Button>
            </Left>
            <Body />
          </Header>
        </View>
        <ScrollView>
          <MainCarousel data={mainData} />
          <MovieList data={mainDataPopular} />
          <MovieList data={mainDataBrandNew} />
        </ScrollView>
      </>
    ) : (
      <>
        <LoadingScreen />
      </>
    );
  }
}
