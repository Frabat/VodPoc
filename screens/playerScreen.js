import React from 'react';
import Video from 'react-native-video';
import LoadingScreen from '../components/LoadingScreen';
//componente che effettivamente gestisce la riproduzione dei file multimediali
//a causa della natura dei files presenti nel JSON (manifest.mpd) É OBBLIGATORIO USARE EXOPLAYER
//In questo progetto è stato già fatto, ma in ogni caso è necessario il file react-native.config.js per 
//impostare exoplayer come player predefinito su Android
export default class videoPlayer extends React.Component {
  state = {
    link: '',
    isLoading: true,
  };
  //a causa del passaggio delle props, è necessario utilizzare il navigation.getParam
  //Questo è richiesto da questa versione di react navigation, controllare se è richiesto anche dalle
  //successive
  componentDidMount() {
    const {navigation} = this.props;
    const uri = navigation.getParam('uri', []);

    uri
      ? this.setState({
          link: uri,
          isLoading: false,
        })
      : //Video mostrabile di default nel caso in cui non ci sia un campo popolato all'interno del JSON
        //da cui andare a riprendere il manifest.mpd
        this.setState({
          link:
            'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4',
          isLoading: false,
        });
  }

  render() {
    return !this.state.isLoading ? (
      <Video
        source={{uri: this.state.link}}
        ref={ref => {
          this.player = ref;
        }}
        resizeMode={'contain'}
        onBuffer={this.onBuffer}
        onError={this.videoError}
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        controls={true}
        fullscreen={true}
        fullscreenOrientation="landscape"
      />
    ) : (
      <LoadingScreen />
    );
  }
}
