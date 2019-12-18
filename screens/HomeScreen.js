import {Button, Header, Icon, Left, Body} from 'native-base';
import React from 'react';
import {ScrollView, View, Text} from 'react-native';
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
          <Header
            transparent
            style={{
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              backgroundColor: '#070D0B',
            }}>
            <Left>
              <Button transparent style={{width: '60%'}}>
                <Icon
                  name="menu"
                  style={{color: '#248A33', width: '100%', fontSize : 35}}
                  onPress={() => this.props.navigation.openDrawer()}
                />
              </Button>
            </Left>
            <Body style={{marginLeft: 22}}>
              <Text
                style={{
                  fontSize: 25,
                  justifyContent: 'space-around',
                  color: '#FFFFFF',
                }}>
                Featured
              </Text>
            </Body>
          </Header>
        </View>
        <ScrollView style={{backgroundColor: '#070D0B'}}>
          <MainCarousel data={mainData} navigation={this.props.navigation} />
          <MovieList
            data={mainDataPopular}
            navigation={this.props.navigation}
          />
          <MovieList
            data={mainDataBrandNew}
            navigation={this.props.navigation}
          />
        </ScrollView>
      </>
    ) : (
      <>
        <LoadingScreen />
      </>
    );
  }
}
