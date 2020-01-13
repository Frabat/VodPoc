import React from 'react';
import PTRView from 'react-native-pull-to-refresh';
import {Button, Header, Icon, Left, Body} from 'native-base';
import {ScrollView, View, Text} from 'react-native';
import MainCarousel from '../components/Carousel';
import LoadingScreen from '../components/LoadingScreen';
import MovieList from '../components/MovieList';
import Services from '../components/Services';
export default class HomeScreen extends React.Component {
  //isLoading è una booleana che viene settata a false una volta 
  //che la fetch dei dati dal JSON è completata
  //config è il vettore in cui il JSON ricevuto viene temporaneamente
  //salvato. La funzione fa riferimento ad una classe di servizi
  //se eventualmente si vuole passare ad utilizzare dei componenti 
  //funzionali (e.g. usando gli Hooks) l'implementazione mediante il costrutto "services = new Services()" 
  //non sarà più necessaria, basterà richiamare la funzione direttamente
  state = {
    isLoading: true,
    config: [],
  };
  services = new Services();

  componentDidMount() {
  
    this.configuration();
  }
  //funzione in cui viene richiamata getConfig() per recuperare il JSON.
  //Stranamente la fetch ha un problema di accessi, ovvero in alcuni momenti della giornata
  //è estremamente lenta nel recuperare i dati. 
  configuration() {
    this.services.getConfig().then(result => {
      this.setState({
        isLoading: false,
        config: result.content[0].layers.configuration.config,
      });
    });
  }
  //funzione Pull to refresh. Attualmente implementata solo qui in maniera indicativa.
  //Bisogna spostare la logica di fetch al JSON (configuration(); ) all'interno di questa promise 
  //nel caso in cui la si voglia implementare
  _refresh = ()=> {
    return new Promise((resolve)=> {
      this.configuration();
      setTimeout(()=>{resolve()})
    })
  }
  render() {
    //dati da passare alla componente carosello
    const mainData = this.state.config.length > 0 ? this.state.config[0] : [];
//dati da passare alla prima flatlist
    const mainDataPopular =
      this.state.config.length > 0
        ? this.state.config[0].section.strips[1]
        : [];
//Dati da passare alla seconda flatlist
    const mainDataBrandNew =
      this.state.config.length > 0
        ? this.state.config[0].section.strips[2]
        : [];

    return !this.state.isLoading ? (
      <>
      
        <View>
          <Header
            transparent
            style={{
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              backgroundColor: '#070D0B',
            }}>
            <Left>
              <Button transparent style={{width: '60%'}}>
                <Icon
                  name="menu"
                  style={{color: '#248A33', width: '100%', fontSize: 35}}
                  onPress={() => this.props.navigation.openDrawer()}
                />
              </Button>
            </Left>
            <Body style={{marginLeft: 22}}>
              <Text
                style={{
                  fontSize: 25,
                  justifyContent: 'space-around',
                  color: '#FFFFFF',
                }}>
                Featured
              </Text>
            </Body>
          </Header>
        </View>
        <PTRView onRefresh={this._refresh}>
          <ScrollView style={{backgroundColor: '#070D0B'}}>
            <MainCarousel data={mainData} navigation={this.props.navigation} /> 
            <MovieList
              data={mainDataPopular}
              navigation={this.props.navigation}
            />
            <MovieList
              data={mainDataBrandNew}
              navigation={this.props.navigation}
            />
          </ScrollView>
        </PTRView>
      </>
    ) : (
      //Componente LOTTIE per l'animazione
      <>
        <LoadingScreen />
      </>
    );
  }
}
