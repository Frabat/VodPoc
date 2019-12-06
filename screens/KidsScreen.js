import React from 'react';
import {Text, Header, Button, Left, Icon, Body} from 'native-base';
import Services from '../components/Services';
import HeaderTop from '../components/Header';
import VideoList from '../components/VideoList';
import LoadingScreen from '../components/LoadingScreen';
import {ScrollView, SafeAreaView, View} from 'react-native';

class Kids extends React.Component {
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
        ? this.state.config[3].section.strips[0]
        : [];

    return !this.state.isLoading ? (
      <>
        <View>
          <Header transparent>
            <Left>
              <Button transparent>
                <Icon
                  name="menu"
                  style={{color: 'black'}}
                  onPress={() => this.props.navigation.openDrawer()}
                />
              </Button>
            </Left>
            <Body />
          </Header>
        </View>
        <ScrollView>
          <Text>Kids</Text>
          <VideoList data={seriesData} />
        </ScrollView>
      </>
    ) : (
      <LoadingScreen />
    );
  }
}

export default Kids;
