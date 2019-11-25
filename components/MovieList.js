import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import Services from './Services';

export default class MovieList extends React.Component {
  services = new Services();
  state = {
    data: [
        
    ],
  };
  componentDidMount = () => {
    console.log('DATA ->', this.props.data.stripQuery);
    this.services
      .getElements(this.props.data.stripQuery)
      .then(result => {
        console.log('Guarda come ti fetcho pt.2, guarda', result);
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
    console.log('Nel Movielistbrandnew abbiamo ', this.state.data);
    return (
      <View>
        <Text>{this.props.data.stripName}</Text>
        <FlatList
          horizontal
          renderItem={this._renderitem}
          data={this.state.data}
          keyExtractor={this._renderitem.id}
        />
      </View>
    );
  }
}
