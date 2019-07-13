/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CompoImages from './CompoImages';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.column1}>
          <CompoImages imageSource={require('../img/img2.jpeg')}/>
        </View>

        <View style={styles.column1}>
        <CompoImages imageSource={require('../img/img3.jpeg')}/>
        </View>

      
        <View style={styles.columnFull}>
        <CompoImages imageSource={require('../img/img4.jpg')}/>
        </View>

        <View style={styles.column2}>
          <CompoImages imageSource={require('../img/img5.jpeg')}/>
        </View>

        <View style={styles.column1}>
        <CompoImages imageSource={require('../img/img6.jpeg')}/>
        </View>

        <View style={styles.columnFull}>
        <CompoImages imageSource={require('../img/img3.jpeg')}/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding:2,
    backgroundColor: 'white',
  },
  column1:{
    flex:1,
    padding:2,

  },
  column2:{
    flex:2,
    padding:2,

  },
  columnFull:{
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding:2,

  },
});
