import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ImageBackground,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Home from './Home'

import limg from "./img/tcadastro.jpg"

export default function Login() {
  const navigation = useNavigation()


  return (
    
    <SafeAreaView style={styles.container}>
    
        <Image source={limg}  style={styles.ilogin}>
        </Image>
        <Text style={styles.text}>SIGN UP</Text>


      <TextInput placeholder="NickName" style={styles.txtinput} placeholderTextColor="black"/>
      
      <TextInput placeholder="Email" style={styles.txtinput} placeholderTextColor="black"/>
      
      <TextInput secureTextEntry={true} placeholder="Password" style={styles.txtinput} placeholderTextColor="black"/>

      <TextInput secureTextEntry={true} placeholder="Confirm Password" style={[ styles.txtinput]} placeholderTextColor="black"/>

      <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btntxt}>
            LOGIN
          </Text>
        </TouchableOpacity>


   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#91baa8',
      alignItems: 'center',
      justifyContent: 'flex-start',
      zIndex: 99
    },
    button: {
      marginVertical: 100,
      textAlign: 'center',
      borderRadius: 7,
      backgroundColor: '#739c8a',
      padding: 10,
      shadowOpacity: 0.2
    },
    
    text: {
    padding: 6,
    color: '#f6f8f3',
    fontSize: 40,
    fontFamily: 'DynaPuff-Bold',
    backgroundColor:'#91baa8',
  },

    ilogin:{
      justifyContent: 'flex-end',
      width:'100%',
      height:'30%'

    },
    btntxt: {
      padding: 10,
      color: '#f6f8f3',
      fontSize: 25,
      fontFamily: 'DynaPuff-Bold',
      },
  
    txtinput:{
      backgroundColor:'#fff',
      width:'90%',
      padding: 10,
      borderRadius: 15,
      color:'black',
      margin: 10,
    },
    txtinp:{
      marginBottom: 500
    }
   
    }
  )