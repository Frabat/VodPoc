import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Kids from './screens/KidsScreen';
import Movies from './screens/MoviesScreen';
import Series from './screens/SeriesScreen';
import HeaderTop from './components/Header';
console.disableYellowBox = true

export default class App extends React.Component {
  render() {
    return (
      <>
      
        <AppDrawerNavigator />
      </>
    );
  }
}

const CustomDrawer = (props) => (
  <SafeAreaView style = {{flex : 1}}>
  
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)
const AppDrawerNavigator = createDrawerNavigator({
  Featured : HomeScreen,
  Kids : Kids, 
  Movies : Movies,
  Series : Series
}, {
  contentComponent : CustomDrawer
})