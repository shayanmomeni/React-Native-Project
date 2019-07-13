/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class HeroText extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headerText}>Laptops </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    shadowColor: '#fff',
    shadowOffset: {width: -3, height: -2},
    shadowOpacity: 0.8,
    shadowRadius: 20,
    borderRadius: 30,

    elevation: 1,
    alignSelf: 'center',
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: 10,
    fontWeight: 'bold',





  },
});
