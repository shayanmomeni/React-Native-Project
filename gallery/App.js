import React from 'react';
import { StyleSheet, Text, View ,ScrollView } from 'react-native';
import Header from './app/Component/Header';
import Mid from './app/Component/Mid';
import Body from './app/Component/Body';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Mid />
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
