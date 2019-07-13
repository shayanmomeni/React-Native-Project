/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
      <Image
        source={require('../img/img1.png')}
        style={styles.logo}
      />
      <Text style={styles.logoTitle}>Shayan Shopping Cart</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height:80,
    marginTop:20,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:20,
    borderBottomWidth:4,
    borderColor:'#c1c1c1',
    width:Dimensions.get('window').width,

  },

  logo: {
    width:42,
    height:42,
    marginTop:10,

  },

  logoTitle:{
    marginTop:10,
    marginLeft:10,
    color:'#000',
    fontWeight:'bold',
    fontSize: 15,
    fontStyle:'italic',



    },
});
