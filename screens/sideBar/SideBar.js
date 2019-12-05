import React from 'react';
import {Container, Content, Text, List, ListItem} from 'native-base';

const routes = ['Featured', 'Kids', 'Movies', 'Series'];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            contentContainerStyle={{marginTop: 120}}
            renderRow={data => {
              return (
                <ListItem>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
