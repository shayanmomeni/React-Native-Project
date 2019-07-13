/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail , Button, Icon, Left, Body, Right } from 'native-base';


export default class CardImg extends Component {
  render() {
    return (


   <Content >
     <Card>
       <CardItem>
         <Left>
           <Thumbnail source={require('./img11.jpg')} />
           <Body>
             <Text>Shayan Momeni</Text>
             <Text note>Iran,Shiraz</Text>
           </Body>
         </Left>
       </CardItem>
       <CardItem cardBody>
         <Image source={require('./img11.jpg')} style={{height: 340, width: null, flex: 1}}/>
       </CardItem>
       <CardItem>
         <Left>
           <Button transparent>
             <Icon active name="thumbs-up" />
             <Text >12 Likes</Text>
           </Button>
         </Left>
         <Body>
           <Button transparent>
             <Icon active name="chatbubbles" />
             <Text>4 Comments</Text>
           </Button>
         </Body>
         <Right>
           <Text>11h ago</Text>
         </Right>
       </CardItem>
     </Card>
   </Content>


    );
  }
}
