/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TabBar extends Component {
  render() {
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.container}>
          <Icon name="home"  size={25} />
          <Text style={styles.myText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container}>
          <Icon name="whatshot"  size={25} />
          <Text style={styles.myText}>What's hot</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container}>
          <Icon name="subscriptions"  size={25} />
          <Text style={styles.myText}>Subscriptions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container}>
          <Icon name="add-alert"  size={25} />
          <Text style={styles.myText}>Activity</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.container}>
          <Icon name="folder"  size={25} />
          <Text style={styles.myText}>Library</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 2,
    borderColor: '#e5e5e5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal:4,
    paddingBottom:5,


  },
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:5,

  },
  myText:{
    color:'rgb(50,50,50)',
    paddingTop: 3,
    fontSize: 14,
    textAlign: 'center',

  },
});
