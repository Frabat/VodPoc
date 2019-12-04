import React from 'react';
import HeaderTop from './components/Header';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <>
        <HeaderTop />

        <HomeScreen />
      </>
    );
  }
}
