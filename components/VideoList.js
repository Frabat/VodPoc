import React from 'react';
import {FlatList, Image, View, TouchableOpacity} from 'react-native';
import Services from './Services';
//componente utilizzato nel render delle classi Kids e Movies
export default class VideoList extends React.Component {
  state = {Data: []};
  _renderitem({item, index}) {
    return (
      <>
        <TouchableOpacity onPress = {() => {
          const currentID = item.id;
          this.props.navigation.navigate('videoPage', {id : {currentID}})
        }}
        >
          <Image
            source={{uri: item.imageCard}}
            style={{width: 100, height: 150, marginHorizontal: 10, marginVertical : 3}}
          />
        </TouchableOpacity>
      </>
    );
  }
  services = new Services();
  componentDidMount = () => {
    this.services.getElements(this.props.data.stripQuery).then(result => {
      this.setState({
        Data: result,
      });
    });
  };
  render() {
    return (
      <View>
        <FlatList
          renderItem={this._renderitem.bind(this)}
          data={this.state.Data}
          keyExtractor={this._renderitem.id}
          horizontal={false}
          numColumns={3}
          navigation = {this.props.navigation}
        />
      </View>
    );
  }
}
