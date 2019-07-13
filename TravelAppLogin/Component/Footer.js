/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, Item, Input, Icon , Button } from 'native-base';

export default class Footer extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View>
          <Button rounded success style={styles.login}>
              <Text style={styles.loginText}>Login</Text>
          </Button>
          </View>

          <View style={styles.newHere}>
            <Text style={styles.textNewHere}>New Here?</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.createAnAccount}>
              <Text style={styles.TextCreateAnAccount}>Create an Account?</Text>
            </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  login:{
    width:320,
    height:80,
    justifyContent:'center',
    backgroundColor:'transparent',
    borderWidth:2,
    borderColor:'#fff',

    },
  loginText:{
    fontSize:33,
    color:'#fff',

},
  textNewHere:{
    fontSize:25,
    color:'#fff',
    opacity:0.9,
    paddingTop:8,

    },
  newHere:{
    alignSelf:'center',

      },

  createAnAccount:{
    alignSelf:'center',
    padding:3,

      },
  TextCreateAnAccount:{
    fontSize:27,
    color:'#fff',

      },


});
