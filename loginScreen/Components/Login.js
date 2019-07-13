/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Dimensions,
  StyleSheet,
} from 'react-native';
 import Myform from './Myform';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContiner}>

          <Image
            style={styles.logo}
            source={require('./images/Logo.png')}
          />

        </View>

        <View style={styles.myForm}>
          <Myform />
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:Dimensions.get('window').width,

  },

  logoContiner :{
    flex :1,
    backgroundColor :'#29aae2',
    alignItems :'center',
    justifyContent:'center',
    },

    logo :{
      width : 270,
      height : 270,
      marginTop:10,

      },

      myForm:{
        flex:1,
        backgroundColor:'#29aae2',
        },
});
