import PropTypes from 'prop-types';
import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
let carouselWidth = deviceWidth * 0.9;
let carouselHeight = carouselWidth * 1.5;

export default class CarouselItem extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };
  render() {
    const {
      data: {title, description, imageCard, id},
      navigation,
    } = this.props;
    return (
      <TouchableOpacity
      style = {{backgroundColor : "#070D0B"}}
        onPress={() => {
          const currentID = id;
          navigation.navigate('videoPage', {id: {currentID}});
        }}>
        <Image
          style={{
            width: deviceWidth,
            height: carouselHeight,
            paddingHorizontal: 10,
            marginHorizontal: 10,
          }}
          source={{uri: imageCard}}
        />
        <View style = {{width : carouselWidth, marginHorizontal : "3%"}}>

        <Text style = {{color : "#FFFFFF", fontSize : 25}}>{title}</Text>
        <Text style = {{color : "#FFFFFF", fontSize : 15}} >{description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
