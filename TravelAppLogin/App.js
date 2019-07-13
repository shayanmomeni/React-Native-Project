import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Header from './Component/Header';
import LoginPart from './Component/LoginPart';
import Footer from './Component/Footer';

export default class App extends React.Component {
  render() {
    return (

      <ImageBackground style={styles.container} source={require('./Component/img/login.png')}>
        <Header />
        <LoginPart />
        <Footer />
      </ImageBackground>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
