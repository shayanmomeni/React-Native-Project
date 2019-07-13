
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class HeaderCustom extends Component {
  render() {
    return (


       <Header style={{backgroundColor: 'orange',}}>
         <Left>
           <Button transparent>
             <Icon name='menu' />
           </Button>
         </Left>
         <Body>
           <Title>Thinder Card</Title>
         </Body>
         <Right>
           <Button transparent>
             <Icon name='camera' />
           </Button>
         </Right>
       </Header>


    );
  }
}
