import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderCustom from './Components/HeaderCustom';
import SwipeCard from './Components/SwipeCard'
export default class App extends React.Component {

  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
}


  render() {
    return (
      <View style={styles.container}>
        <HeaderCustom />
        <SwipeCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#FFFFFF',
  flex:1,

  },
});
