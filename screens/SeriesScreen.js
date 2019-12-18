import {Button, Header, Icon, Left, Text, Body} from 'native-base';
import React from 'react';
import {ScrollView, View} from 'react-native';
import LoadingScreen from '../components/LoadingScreen';
import Services from '../components/Services';
import VideoList from '../components/VideoList';

class Series extends React.Component {
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
    const seriesData =
      this.state.config.length > 0
        ? this.state.config[2].section.strips[0]
        : [];

    return !this.state.isLoading ? (
      <>
        <View>
          <Header transparent style ={{backgroundColor : "#070D0B"}}>
            <Left>
              <Button transparent >
                <Icon
                  name="menu"
                  style={{color: '#248A33', width: '100%', fontSize : 35}}
                  onPress={() => this.props.navigation.openDrawer()}
                />
              </Button>
            </Left>
            <Body>
              <Text style = {{fontSize : 25, color: "white"}}>Series</Text>
              </Body>
          </Header>
        </View>

        <ScrollView style = {{backgroundColor : "#070D0B"}}>
          <Text>Series</Text>
          <VideoList data={seriesData} navigation = {this.props.navigation}/>
        </ScrollView>
      </>
    ) : (
      <LoadingScreen />
    );
  }
}

export default Series;
