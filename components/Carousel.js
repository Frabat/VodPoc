import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Services from "../components/Services";
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
let carouselWidth = deviceWidth*0.9
let carouselHeight = carouselWidth*1.78

export default class MainCarousel extends React.Component {
services = new Services();
state = {
  data : [

  ]
}
  componentDidMount = () => {
    // console.log('DATA ->', this.props.data);
    this.services.getElements(this.props.data.section.strips[0].stripQuery).then(result =>{
      // console.log("Guarda che la fetch ti riporta questa roba", result)
      this.setState ({
        data : result
      }
      )
    }
    )
  }

  _renderItem({item, index}) {
    return (
      <>
        
          <Image 
          style={{width: deviceWidth, height: carouselHeight, paddingHorizontal : 10, marginHorizontal : 10}} 
          source={{uri: item.imageCard}} />
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
      </>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.data.section.strips[0].stripName}</Text>
        <View>
          <Carousel
            ref={c => {
              _carousel = c;
            }}
            renderItem={this._renderItem}
            sliderWidth={deviceWidth}
            itemWidth={carouselWidth}
            sliderHeight = {carouselHeight}
            itemHeight = {carouselHeight}
            data={this.state.data}
            style = {{padding : 12}}
            hasParallaxImages = {true}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding : 10
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
