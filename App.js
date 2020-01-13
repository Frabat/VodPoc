import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Image } from 'react-native';
import { createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Kids from './screens/KidsScreen';
import Movies from './screens/MoviesScreen';
import videoPlayer from './screens/playerScreen';
import Series from './screens/SeriesScreen';
import VideoScreen from './screens/VideoScreen';


//elimina i warning presenti sullo schermo del dispositivo
console.disableYellowBox = true;

//main dell'intera applicazione, viene richiamato qui il 
//componente MainStackNavigator che contiene le altre componenti
//a cui fa riferimento l'applicazione

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


//definizione del componente customdrawer, necessaria per la 
//personalizzazione del Drawer

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
//implementazione del drawer
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
//definizione di un navigatore Stack, necessario per raggiungere
//le pagine di dettagli video e di riproduzione video 
const AppStackNavigator = createStackNavigator(
  {
    videoPage: VideoScreen,
    player: videoPlayer,
  },
  {headerMode: 'none'},
);

//Navigazione stack necessaria per contenere sia il drawer 
//che la navigazione alle pagine di riproduzione
const MainStackNavigator = createStackNavigator(
  {
    MainDrawer: AppDrawerNavigator, //Menù laterale
    Main: AppStackNavigator,  //Qualsiasi altro tap (navigazione normale/stack)
  },
  {initialRouteName: 'MainDrawer', headerMode: 'none'},
);
