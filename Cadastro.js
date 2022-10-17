import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './Home'
import limg from "./img/tcadastro.jpg"
import { auth } from './firebase';

console.disableYellowBox = true;


export default function Login(props) {


  const { navigation } = props;
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


  const handleSignUp = () =>{
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registered with:', user.email);
    })
    .catch(error => alert(error.message))
  }
  
  

  return (


    <SafeAreaView style={styles.container}>

      <Image source={limg} style={styles.ilogin}>
      </Image>
      <Text style={styles.text}>SIGN UP</Text>

      <TextInput placeholder="Email" style={styles.txtinput} placeholderTextColor="black"
        defaultValue={email} onChangeText={(email) => setemail(email) }  />

      <TextInput secureTextEntry={true} placeholder="Password"
       style={styles.txtinput} placeholderTextColor="black" defaultValue={password}
       onChangeText={(password) => setpassword(password) } />

      <TouchableOpacity style={[styles.button]} 
      onPress={handleSignUp} >
        <Text style={styles.btntxt}>
          LOGIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
        <Text
          style={styles.loginText}>Já tem Cadastro? Clique Aqui!</Text>
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
    backgroundColor: '#91baa8',
  },

  ilogin: {
    justifyContent: 'flex-end',
    width: '100%',
    height: '30%'

  },
  btntxt: {
    padding: 10,
    color: '#f6f8f3',
    fontSize: 25,
    fontFamily: 'DynaPuff-Bold',
  },

  txtinput: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 10,
    borderRadius: 15,
    color: 'black',
    margin: 10,
  },
  txtinp: {
    marginBottom: 500
  },
  txtl: {
    color: 'white',
  },
  loginText: {
    marginTop: "20%",
    color: 'white',
  },

}
)