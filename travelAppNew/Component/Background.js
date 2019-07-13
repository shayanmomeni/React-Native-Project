/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import HeaderText from './HeaderText';
import Title from './Title';
import Footer from './Footer';
import Footer2 from './Footer2';
import Footer3 from './Footer3';

export default class Background extends Component {
  render() {
    return (
      <ScrollView horizontal={true} pagingEnabled={true}>
      <ImageBackground style={styles.container} source={require('./img/kl2.png')}>
        <HeaderText />
        <Title />
        <Footer />
      </ImageBackground>
      <ImageBackground style={styles.container} source={require('./img/second.png')}>
        <HeaderText />
        <Title />
        <Footer2 />
      </ImageBackground>
      <ImageBackground style={styles.container} source={require('./img/third.png')}>
        <HeaderText />
        <Title />
        <Footer3 />
      </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,

  },

});
