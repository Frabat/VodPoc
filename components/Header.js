import { Button, Container, Header, Icon, Left, Right, Body } from 'native-base';
import React from 'react';
//DEPRECATO
export default class HeaderTop extends React.Component {
  render() {
    return (
      
      <>

        <Header transparent >
          <Left style = {{alignContent : "flex-start"}}>

          <Button transparent onPress = {this.props} >
            <Icon name="menu"  style = {{color :"#070D0B", fontSize : 30}} />
          </Button>
          </Left>
          <Body> 

          </Body>
          <Right>
            
          </Right>
        </Header>
      </>
      
    );
  }
}
