import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import limg from "./img/tlogin.jpg"

export default function Login() {
  const navigation = useNavigation()


  return (
    <SafeAreaView style={styles.container}>
    
        <Image source={limg}  style={styles.ilogin}>
        </Image>
        <Text style={styles.text}>LOGIN</Text>


      <TextInput placeholder="NickName" style={styles.txtinput} placeholderTextColor="black"/>

      <TextInput secureTextEntry={true} placeholder="Password" style={styles.senha} placeholderTextColor="black"/>

      <TouchableOpacity style={[styles.button]} onPress={() => {}}>
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
    padding: 10,
    color: '#f6f8f3',
    fontSize: 40,
    fontFamily: 'DynaPuff-Bold',
    },

    btntxt: {
      padding: 10,
      color: '#f6f8f3',
      fontSize: 25,
      fontFamily: 'DynaPuff-Bold',
      },
  
    ilogin:{
      justifyContent: 'flex-end',
      width:'100%',
      height:'28%'

    },
    txtinput:{
      height:60,
      backgroundColor:'#fff',
      width:'90%',
      padding: 10,
      borderRadius: 25,
      color:'black',
      margin: '10%',
      marginTop: '20%',

    },
    senha:{
      backgroundColor:'#fff',
      width:'90%',
      height:60,
      padding: 10,
      borderRadius: 25,
      color:'black',
    },
   
    }
  )