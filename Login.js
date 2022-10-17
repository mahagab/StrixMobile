import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './Home'

import SignUp from './Cadastro'

console.disableYellowBox = true;
import { auth } from './firebase';

import limg from "./img/tlogin.jpg"

console.disableYellowBox = true;

const Login = props => {

  const navigation = useNavigation()
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }
return (

  <SafeAreaView style={styles.container}>
    
  <Image source={limg}  style={styles.ilogin}>
  </Image>
  <Text style={styles.text}>LOGIN</Text>


  <TextInput placeholder="Email" style={styles.txtinput} placeholderTextColor="black"
        defaultValue={email} onChangeText={(email) => setemail(email) }  />

      <TextInput secureTextEntry={true} placeholder="Password"
       style={styles.senha} placeholderTextColor="black" defaultValue={password}
       onChangeText={(password) => setpassword(password) } />

<TouchableOpacity style={[styles.button]}  onPress={handleLogin}>
    <Text style={styles.btntxt}>
      LOGIN
    </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => {navigation.navigate('Cadastro')}}>
<Text
style={styles.loginText}>Não tem Cadastro? Sign Up</Text>
</TouchableOpacity>



</SafeAreaView>
);
}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#91baa8',
      alignItems: 'center',
      justifyContent: 'flex-start',
      zIndex: 99
    },

    button: {
      marginVertical: 90,
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
    loginText:{
      color:'white',
    },
   
    }
  )