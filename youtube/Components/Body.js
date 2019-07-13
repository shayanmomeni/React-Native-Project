/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class Body extends Component {
  render() {
    let video = this.props.video;
    return (
      <View style={styles.container}>
        <Image
        source={{uri:video.snippet.thumbnails.medium.url}}
        style={{height: 200, borderRadius: 5, }}
        />
        <View style={styles.textContainer}>
          <Image
          source={{uri: video.snippet.thumbnails.default.url}}
          style={styles.proPic}
          />
          <View style={styles.innerContainer}>
            <Text style={styles.videoTitle}> {video.snippet.title}</Text>
            <Text style={styles.videostatus}> {video.snippet.channelTitle} - 140K Views</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  textContainer:{
    marginLeft: 10,
    padding: 5,
    flexDirection: 'row',
    paddingTop: 15,
  },
  videoTitle:{
    fontSize: 14,
    color:'#fff',
    fontWeight: 'bold',
    marginRight: 4,

  },
  proPic:{
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  innerContainer:{
    marginLeft: 10,
    padding: 6,

  },
  videostatus:{
    color:'#fff',
    fontSize:14,
    marginTop: 4,
  },
});
