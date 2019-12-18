import {Button, Header, Icon, Left, Text, Body} from 'native-base';
import React from 'react';
import {ScrollView, View} from 'react-native';
import LoadingScreen from '../components/LoadingScreen';
import Services from '../components/Services';
import VideoList from '../components/VideoList';

class Movies extends React.Component {
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
    const moviesData =
      this.state.config.length > 0
        ? this.state.config[1].section.strips[0]
        : [];
    const moviesDataPopular =
      this.state.config.length > 0
        ? this.state.config[1].section.strips[1]
        : [];
    const moviesDataBrandnew =
      this.state.config.length > 0
        ? this.state.config[1].section.strips[2]
        : [];

    return !this.state.isLoading ? (
      <>
        <View>
          <Header transparent style = {{backgroundColor : "#070D0B"}}>
            <Left>
              <Button transparent>
                <Icon
                  name="menu"
                  style={{color: '#248A33', width: '100%', fontSize : 35}}
                  onPress={() => this.props.navigation.openDrawer()}
                />
              </Button>
            </Left>
            <Body>
              <Text style = {{color : "white", fontSize : 25}}>Movies</Text>
              </Body>
          </Header>
        </View>
        <ScrollView style = {{backgroundColor : "#070D0B"}}>
          <Text style = {{color : "white"}}>Evidence</Text>
          <VideoList data={moviesData} navigation = {this.props.navigation} />
          <Text style = {{color : "white"}}>Popular</Text>
          <VideoList data={moviesDataPopular} navigation = {this.props.navigation}/>
          <Text style = {{color : "white"}}>Brand New</Text>
          <VideoList data={moviesDataBrandnew} navigation = {this.props.navigation}/>
        </ScrollView>
      </>
    ) : (
      <LoadingScreen />
    );
  }
}

export default Movies;
