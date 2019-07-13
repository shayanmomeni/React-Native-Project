
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>TRAVEL {"\n"}TO MALAYSIA</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    color:'#fff',
    fontWeight: 'bold',
    fontSize: 35,
  },
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
