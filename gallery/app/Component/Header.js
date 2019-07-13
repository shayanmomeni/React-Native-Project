/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.headerbg}
        source={require('../Images/222.jpg')}
        >
        <View style={styles.headercontainer}>
          <View style={styles.profilepiccontainer}>
            <Image
              style={styles.mypic}
              source={require('../Images/img11.jpg')}
               />
          </View>
          <Text style={styles.name}>Shayan Momeni</Text>
          <Text style={styles.liner}>Mobile App Designer</Text>
        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerbg: {
    width: null,
    alignSelf: 'stretch',
    height:300,


  },
  headercontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',

  },
  profilepiccontainer: {
    width: 140,
    height: 140,
    marginTop:40,

  },
  mypic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#fff',


  },
  name: {
    marginTop: 18,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  liner: {
    color: '#fff',
    marginTop: 5,
    fontSize: 15,
    fontStyle: 'italic',
  },
});
