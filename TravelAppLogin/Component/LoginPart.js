/* @flow */

import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { Container, Header, Content, Item, Input, Icon , Button } from 'native-base';


export default class LoginPart extends Component {
  render() {
    return (



        <View style={styles.container}>
              <View>
                 <Item>
                    <Icon active name='person' style={styles.icon1}/>
                    <Input style={styles.inputUser} placeholder='USER NAME' placeholderTextColor="#FFF"/>
                 </Item>
                 <Item>
                    <Icon active name='lock' style={styles.icon2}/>
                    <Input style={styles.inputUser} placeholder='PASSWORD' placeholderTextColor="#FFF" secureTextEntry={true}/>
                 </Item>

                 <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                 </TouchableOpacity>
              </View>

        </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:28,
    justifyContent:'center',
  },
  inputUser:{
    color:'#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft:8,

  },
  icon1:{
    color:'#fff',
    padding:10,

    },
  icon2:{
    color:'#fff',
    padding:12,

    },
  forgot:{
    fontSize:20,
    color:'#fff',
    padding:10,

    },



});
