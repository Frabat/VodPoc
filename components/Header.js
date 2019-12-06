import { Button, Container, Header, Icon, Left, Right, Body } from 'native-base';
import React from 'react';

export default class HeaderTop extends React.Component {
  render() {
    return (
      
      <>

        <Header transparent >
          <Left style = {{alignContent : "flex-start"}}>

          <Button transparent onPress = {this.props} >
            <Icon name="menu"  style = {{color :"black", fontSize : 30}} />
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
