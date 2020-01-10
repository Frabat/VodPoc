import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Image } from 'react-native';
import { createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Kids from './screens/KidsScreen';
import Movies from './screens/MoviesScreen';
import videoPlayer from './screens/playerScreen';
import Series from './screens/SeriesScreen';
import VideoScreen from './screens/VideoScreen';



console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar hidden={true} />

        <MainStackNavigator />
      </>
    );
  }
}



const CustomDrawer = props => (
  <>
  <View
  style = {{alignItems : "center", justifyContent : "center"}}>
    <Image 
    source = {require('./assets/logo.png')}
    style = {{width : 50, height : 50, resizeMode : "contain"}}
    />
  </View>
  <SafeAreaView >
    <ScrollView> 
      <DrawerItems {...props} />
      
    </ScrollView>
  </SafeAreaView>
  </>
);

//Contiene le rotte per le "macroclassi" laterali
const AppDrawerNavigator = createDrawerNavigator(
  {
    Featured: HomeScreen,
    Kids: Kids,
    Movies: Movies,
    Series: Series,
    // Donotpress : Hbbtv
  },
  {
    contentComponent: CustomDrawer,
    drawerBackgroundColor : "#070D0B",
    contentOptions : {inactiveTintColor : "#289C3A", activeTintColor : "#38D64F", activeBackgroundColor :"#134A1B"},  
    initialRouteName: 'Featured'
  },
);

//Reindirizzazione del tap sulla pagina del film o sul player 
const AppStackNavigator = createStackNavigator(
  {
    videoPage: VideoScreen,
    player: videoPlayer,
  },
  {headerMode: 'none'},
);

const MainStackNavigator = createStackNavigator(
  {
    MainDrawer: AppDrawerNavigator, //Menù laterale
    Main: AppStackNavigator,  //Qualsiasi altro tap (navigazione normale/stack)
  },
  {initialRouteName: 'MainDrawer', headerMode: 'none'},
);
