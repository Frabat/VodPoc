import { Button, Footer, FooterTab, Icon, Text } from 'native-base';
import React from 'react';

export default class MyFooter extends React.Component {
  render() {
    return (
      <>
        <Footer transparent>
          <FooterTab transparent>
          <Button vertical>
              <Icon name = "home"></Icon>
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="movie"></Icon>
              <Text>Movies</Text>
            </Button>
            <Button vertical>
              <Icon name="monitor"></Icon>
              <Text>TV Shows</Text>
            </Button>
            <Button vertical>
              <Icon name="baby"></Icon>
              <Text>KIDS</Text>
            </Button>
            
          </FooterTab>
        </Footer>
      </>
    );
  }
}
