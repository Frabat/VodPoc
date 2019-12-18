import React from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Services from '../components/Services';
import CarouselItem from './CarouselItem';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
let carouselWidth = deviceWidth * 0.9;
let carouselHeight = carouselWidth * 1.78;

export default class MainCarousel extends React.Component {
  services = new Services();
  state = {
    data: [],
  };
  componentDidMount = () => {
    this.services
      .getElements(this.props.data.section.strips[0].stripQuery)
      .then(result => {
        this.setState({
          data: result,
        });
      });
  };

  _renderItem({item, index}) {
    return (
      <>
        <CarouselItem data={item} navigation={this.props.navigation} />
      </>
    );
  }
  render() {
    return (
      <View style={{backgroundColor: '#070D0B', flex: 1, marginVertical : "2%"}}>
        <Text style={{color: '#FFFFFF', fontSize: 20, justifyContent : "center", alignItems: "center", marginLeft: "39%"}}>
          {this.props.data.section.strips[0].stripName}
        </Text>
        <View style={{backgroundColor: '#070D0B'}}>
          <Carousel
            ref={c => {
              _carousel = c;
            }}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={deviceWidth}
            itemWidth={carouselWidth}
            sliderHeight={carouselHeight}
            itemHeight={carouselHeight}
            data={this.state.data}
            style={{padding: 12}}
            hasParallaxImages={true}
          />
        </View>
      </View>
    );
  }
}
