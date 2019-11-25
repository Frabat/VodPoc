import React from 'react';
import {Animated, Easing} from 'react-native';
import LottieView from 'lottie-react-native';

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
        source={require('../assets/loadingScreen.json')}
        progress={this.state.progress}
        autoplay={true}
        loop={true}
      />
    );
  }
}
