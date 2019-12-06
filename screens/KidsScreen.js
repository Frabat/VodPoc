import React from 'react';
import {Text, Header, Button, Left, Icon} from 'native-base';
import Services from '../components/Services';
import HeaderTop from '../components/Header';
import VideoList from '../components/VideoList';
import LoadingScreen from '../components/LoadingScreen';
import {ScrollView, SafeAreaView} from 'react-native'

class Kids extends React.Component {
  state = {
      isLoading : true, 
      config : []
  };
  services = new Services();
  componentDidMount() {
      this.services.getConfig().then(result => {
          this.setState({
              isLoading : false, 
              config : result.content[0].layers.configuration.config
          })
      })
  }
  render() {
      const seriesData = this.state.config.length > 0 ?this.state.config[3].section.strips[0] : [];
    
      return !this.state.isLoading? (
          <>
          <Header>
          <Left>
            <Button onPress={() => this.props.navigation.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
        </Header>
          <ScrollView>
              <Text>
                  Kids
              </Text>
            <VideoList data = {seriesData} />
            

          </ScrollView>
          </>
      ) : 
      <LoadingScreen /> 
  } 
}

export default Kids;
