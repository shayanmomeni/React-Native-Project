import React from 'react';
import { StyleSheet, Text, View ,ScrollView } from 'react-native';
import NavBar from './Components/NavBar';
import TabBar from './Components/TabBar';
import Body from './Components/Body';

import data from './Components/search.json';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <ScrollView>
          <Body video={data.items[0]} />
          <Body video={data.items[1]} />
          <Body video={data.items[2]} />
          <Body video={data.items[3]} />
          <Body video={data.items[4]} />
        </ScrollView>
        <TabBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
