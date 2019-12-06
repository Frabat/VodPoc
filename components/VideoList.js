import React from 'react'
import { FlatList, Image, View } from 'react-native'
import Services from './Services'
export default class VideoList extends React.Component {
    state = {Data:[

    ]}
    _renderitem({item,index}){
        return(
            <>
                <Image source = {{uri : item.imageCard}} 
                style = {{width : 90, height : 180, marginHorizontal : 10 }}/> 
            </>
        )
    }
    services = new Services();
    componentDidMount = () => {
        this.services.getElements(this.props.data.stripQuery)
        .then(result => {
           
            this.setState({
                Data:result
            })
           
        })
    }
render() {
    return (
    <View>
        <FlatList 
        renderItem = {this._renderitem}
        data = {this.state.Data}
        keyExtractor = {this._renderitem.id}
        horizontal = {false}
        numColumns = {3}
        />
    </View>
    
    )
}
}