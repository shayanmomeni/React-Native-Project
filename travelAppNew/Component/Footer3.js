/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class Footer3 extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity >
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
      <View style={styles.circleStyle}>
      <TouchableOpacity style={styles.circle1}></TouchableOpacity>
      <TouchableOpacity style={styles.circle2}></TouchableOpacity>
      <TouchableOpacity style={styles.circle3}></TouchableOpacity>
      </View>
      <TouchableOpacity >
        <Text style={styles.skip}>Skip</Text>
    </TouchableOpacity>

      </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:80,
    flexDirection: 'row',
    alignItems:  'center',
    borderTopWidth: 1,
    borderTopColor: '#c1c1c1',
    justifyContent:'space-between',

  },
  login:{
    fontSize:25,
    fontWeight: 'bold',
    paddingLeft:20,
    color:'#fff',
  },
  skip:{
    fontSize:25,
    fontWeight: 'bold',
    paddingRight: 20,
    color:'#fff',


},

  circle1:{
    width:16,
    height:16,
    borderRadius:8,
    backgroundColor:'#fff',
    opacity: 0.5,

  },
  circle2:{
    width:16,
    height:16,
    borderRadius:8,
    backgroundColor:'#fff',
    justifyContent: 'space-between',
    opacity: 0.5,


  },
  circle3:{
    width:16,
    height:16,
    borderRadius:8,
    backgroundColor:'#fff',
    justifyContent: 'space-between',


  },
  circleStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:63,
    alignItems:'center',

    },
});
