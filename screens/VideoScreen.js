import { Body, Button, Header, Icon, Left, Text, Title, Right } from 'native-base';
import React from 'react';
import {NavigationActions} from 'react-navigation'
import { Dimensions, ImageBackground, ScrollView, View } from 'react-native';
import Services from '../components/Services';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const imageHeight = screenHeight * 0.75;
const backAction = NavigationActions.back();
class VideoScreen extends React.Component {
  services = new Services();

  state = {
    details: [],
    warning: '',
  };
  componentDidMount() {
    const {navigation} = this.props;
    const id = navigation.getParam('id', []);
    //recupero l'id dal componente padre con il navigation.getParam('id') per poi passarlo alla funzione
    //che interroga il JSON per avere i dati completi. Necessaria per futuri miglioramenti (e.g. episodi disponibili, clip aggiuntive, etc)
    id
      ? this.services.getTitle(id.currentID).then(response =>
          this.setState({
            details: response,
          }),
        )
      : this.setState({
          warning: 'NO VIDEOS FOUND',
        });
  }

  render() {
    return (
      <>
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
                name="arrow-back"
                style={{color: '#248A33', width: '100%', fontSize : 40}}
                onPress={() => this.props.navigation.dispatch(backAction) }
              />
            </Button>
          </Left>
          <Body >
            <Text
              style={{
                fontSize: 20,
                justifyContent: 'space-around',
                color: '#FFFFFF',
              }}>
              {this.state.details.title}
            </Text>
          </Body>
          <Right />
        </Header>
        <ScrollView style={{backgroundColor: '#070D0B'}}>
          <ImageBackground
            source={{uri: this.state.details.imageCard}}
            style={{
              width: screenWidth,
              height: imageHeight,
              marginBottom: 10,
            }}>
            <Button
              transparent
              style={{
                width: screenWidth,
                height: imageHeight,
              }}
              onPress={() => {
                const videoUri = this.state.details.listMediaAvailability[0]
                  .url;
                console.log('Log di VideoUri', videoUri);
                this.props.navigation.navigate('player', {uri: videoUri});
              }}>
              <Icon
                name="play"
                style={{
                  color: 'white',
                  fontSize: 120,
                  marginLeft: '40%',
                  marginTop: '0%',
                }}
              />
            </Button>
          </ImageBackground>
          <View style={{justifyContent: 'flex-start'}}>
            <>
              {/* <Title style={{color: 'white'}}>{this.state.details.title}</Title> */}
              <Text style={{color: 'white'}}>
                {this.state.details.description}
              </Text>
              <Text style={{color: 'white'}}>Genere : </Text>
              <Text style={{color: 'white'}}>
                {this.state.details.subCategories}
              </Text>
            </>
            <Text style={{color: 'white'}}>{this.state.details.category}</Text>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default VideoScreen;
