import React from 'react';
import {createAppContainer} from "react-navigation"
import { createDrawerNavigator, } from "react-navigation-drawer";
import HomeScreen from './screens/homeScreen/HomeScreen';
import Kids from "./screens/kids/KidsScreen";
import Movies from "./screens/movies/MoviesScreen";
import Series from "./screens/series/SeriesScreen";
console.disableYellowBox = true;
const AppDrawerNavigator = createDrawerNavigator({
  Home : HomeScreen,
  Movies : Movies,
  Kids : Kids,
  Series : Series
})

const AppContainer = createAppContainer(AppDrawerNavigator)
export default class App extends React.Component {
  

  render() {
    return (
   <AppContainer />
    )
  }
}