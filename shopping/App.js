import React from 'react';
import { StyleSheet, Text, View ,ScrollView } from 'react-native';
import Header from './app/Components/Header';
import HeroImage from './app/Components/HeroImage';
import Body from './app/Components/Body';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <HeroImage />
        <Body />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    
  },
});
