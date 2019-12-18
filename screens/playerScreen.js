import React from 'react';
import Dimensions from 'react-native'
import Video from 'react-native-video';
import shaka from 'shaka-player'
import LoadingScreen from '../components/LoadingScreen';

// const deviceWidth = Dimensions.get('window').width

// export default class videoPlayer extends React.Component{
//   constructor(props){
//     super(props)
//     this.videoComponent = React.createRef();
//     this.onErrorEvent = this.onErrorEvent.bind(this);
//     this.onError = this.onError.bind(this);
//   }
//   onErrorEvent(event){
//     this.onError(event.detail);
//   }
//   onError(error){
//     console.error('Error code', error.code,'object', error )
//   }
//   state = {
//     link : ""
//   }
//   componentDidMount(){
//     const {navigation} = this.props
//     const uri = navigation.getParm('uri', []);
//     uri?
//     this.setState({
//       link : uri
//     })
//     : 
//     this.setState({
//       link : "https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4"
//     })
//     const video = this.videoComponent.current;
//     var player = new shaka.Player(video)
//     player.addEventListner('error', this.onErrorEvent)
//     player.load(this.state.link).then(function(){
//       console.log("LOADED")
//     }).catch(this.onError)
//   }
//   render(){
//     return(
//       <video 
//       width = {deviceWidth}
//       ref = {this.videoComponent}
//       controls
//       />
//     )
//   }
// }

export default class videoPlayer extends React.Component {
  state = {
    link : "",
    isLoading : true
  }

  componentDidMount() {
  const {navigation} = this.props
  const uri = navigation.getParam('uri', []);
  console.log("E UNO", uri)
uri ? this.setState({
 link : uri, 
 isLoading : false
})  : 
this.setState({
  link : "https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4",
  isLoading : false
})


}

  render() {
    
    return !this.state.isLoading ? (
      
        <Video

          source={{uri : this.state.link}}
          ref={ref => {
            this.player = ref;
          }}
          resizeMode = {"contain"}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={{flex : 1,position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          controls={true}
          fullscreen={true}
          fullscreenOrientation="landscape"
        />
      
    )
    :
    <LoadingScreen />
    ;
  }
}
