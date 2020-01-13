import React from 'react';
import {Animated, Easing} from 'react-native';
import LottieView from 'lottie-react-native';

//Componente che renderizza una schermata di caricamento
//utilizza Lottie di Airbnb per renderizzare un'animazione 
//utilizzando un JSON di base presente negli assets
export default class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
      }),
    ).start();
  }

  render() {
    return (
      <LottieView
        style={{backgroundColor: '#070D0B'}}
        source={require('../assets/loadingScreen.json')}
        progress={this.state.progress}
        autoplay={true}
        loop={true}
      />
    );
  }
}
