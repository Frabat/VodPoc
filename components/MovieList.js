import React from 'react';
import { FlatList, Image, Text } from 'react-native';
import Services from './Services';

export default class MovieList extends React.Component {
  services = new Services();
  state = {
    data: [
        
    ],
  };
  componentDidMount = () => {
   
    this.services
      .getElements(this.props.data.stripQuery)
      .then(result => {
        
        this.setState({
          data: result,
        });
      });
  };
  _renderitem({item, index}) {
    return (
      <>
        <Image
          style={{width: 120, height: 80, marginHorizontal: 20}}
          source={{uri: item.imageCard}}
        />
        <Text>{item.title}</Text>
      </>
    );
   }
  render() {
   
    return (
      <>
        <Text>{this.props.data.stripName}</Text>
        <FlatList
          horizontal
          renderItem={this._renderitem}
          data={this.state.data}
          keyExtractor={this._renderitem.id}
        />
      </>
    );
  }
}
