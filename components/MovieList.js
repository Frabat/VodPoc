import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Services from './Services';

export default class MovieList extends React.Component {
  services = new Services();
  state = {
    data: [],
  };
  componentDidMount = () => {
    this.services.getElements(this.props.data.stripQuery).then(result => {
      this.setState({
        data: result,
      });
    });
  };
  _renderitem({item, index}) {
    return (
      <>
        <TouchableOpacity
      
          onPress={() => {
            const currentID = item.id;
            this.props.navigation.navigate('videoPage', {id: {currentID}});
            
          }}>
          <View style = {{marginHorizontal : 5,marginBottom : 2, width : 100}}>
            <Image
              style={{width: 100, height: 150}}
              source={{uri: item.imageCard}}
            />
            <Text style={{color: 'white', fontSize: 15, textAlign : "auto"}}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  }
  render() {
    return (
      <>
        <Text
          style={{
            color: 'white',
            marginHorizontal: '3%',
            marginVertical: '3%',
          }}>
          {this.props.data.stripName}
        </Text>
        <FlatList
          style = {{marginHorizontal : "3%"}}
          horizontal
          renderItem={this._renderitem.bind(this)}
          data={this.state.data}
          keyExtractor={this._renderitem.id}
          navigation={this.props.navigation}
        />
      </>
    );
  }
}
