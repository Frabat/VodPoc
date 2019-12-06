import { Button, Header, Icon, Left, Text } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import LoadingScreen from '../components/LoadingScreen';
import Services from '../components/Services';
import VideoList from '../components/VideoList';

class Series extends React.Component {
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
      const seriesData = this.state.config.length > 0 ?this.state.config[2].section.strips[0] : [];
    
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
                  Series
              </Text>
            <VideoList data = {seriesData} />
            

          </ScrollView>
          </>
      ) : 
      <LoadingScreen /> 
  } 
}

export default Series;
