/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class NavBar extends Component {
  render() {
    return (

      <View style={styles.navbar}>
        <Image
        style={styles.logo}
        source={require('./youtube.png')}
        />

        <View style={styles.moveRight}>
          <TouchableOpacity>
            <Icon name="search" size={27} style={styles.searchStyle } />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="account-circle" size={27} style={styles.searchStyle } />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  navbar:{
    marginTop: 36,
    height: 55,
    backgroundColor: '#fff',
    elevation: 3,

    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo:{
    width:120,
    height:23,
  },
  moveRight:{
    flexDirection: 'row',
  },
  searchStyle:{
    padding: 5,
    marginLeft: 15,
  },

});
