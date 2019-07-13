/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Title extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>Be Inspired</Text>
        <Text style={styles.details}>To know Malaysia is to love Malaysia - a bubbling,bustling
          melting-pot of races and religions where Malays,Indians,
           Chinese and many other ethnic groups live..
           To know Malaysia is to love Malaysia - a bubbling,bustling
             melting-pot of races and religions where Malays,Indians,
              Chinese and many other ethnic groups live..
              
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
  },
  Title:{
    color:'#fff',
    fontSize: 30,
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop:20,
    },
    details:{
      flex:1,
      color:'#fff',
      fontSize: 18,
      alignSelf: 'center',
      textAlign: 'center',
      paddingTop:10,
      marginLeft:15,
      marginRight:15,
    },
});
