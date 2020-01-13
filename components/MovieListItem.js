import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

//singolo elemento renderizzato da Movielist
export default class MovieListItem extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    const {
      data: {imageCard, title},
      navigation
    } = this.props;
    pressHandler = (item) => {
      navigation.navigate('videoPage' );

    }
    return (
      <>
        <TouchableOpacity onPress={(item ) => navigation.navigate('videoPage', {item})}>
          <Image
            style={{width: 120, height: 80, marginHorizontal: 20}}
            source={{uri: imageCard}}
          />
        </TouchableOpacity>
        <Text>{title}</Text>
      </>
    );
  }
}
