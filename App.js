import React from 'react';
import HeaderTop from './components/Header';
import HomeScreen from './HomeScreen';

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
