/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class Myform extends Component {
  render() {
    return (
      <View style={styles.container}>

        <TextInput
          placeholder="User Name"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
        />

        <TouchableOpacity style={styles.inputContainer}>
        <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <View>
        <Text style={styles.termsAndCondition}> {'\u00A9'} REWARDSX</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:37,
    marginTop:-30,


  },

  input:{

    height:40,
    width:300,
    backgroundColor:'rgba(255,255,255,0.8)',
    paddingLeft:12,
    fontSize:20,
    marginBottom:10,

    },

    textLogin:{

      textAlign:'center',
      color:'white',
      fontWeight:'bold',
      fontSize:17,

      },
      inputContainer:{

          backgroundColor:'#FFC107',
          height:40,
          paddingVertical:10,

        },
      forgotPassword:{

        marginLeft:176,
        marginTop:8,
        fontWeight:'bold',
        },

        termsAndCondition:{

          marginTop:220,
          textAlign:'center',
          color:'#212121',
          },
});
