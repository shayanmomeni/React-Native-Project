/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class HeaderText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>TRAVEL{"\n"} TO MALAYSIA</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle:{
    color:'#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',

  },
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
