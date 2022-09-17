import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Login from './Login'
import Cadastro from './Cadastro'

import Home from './Home'
import Search from './Search'
import List from './List'
import Chatbot from './Chatbot'
import Tendencies from './Tendencies'
import Notification from './Notification'

import React, {useState,} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView,
} from 'react-native';
import {ActionModal} from './src/ActionModal'

const Stack = createStackNavigator();


export default function MyStack() {
  return (
      <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name= 'App' component={App} options={{headerShown: false}}/>
            <Stack.Screen name= 'Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name= 'Cadastro' component={Cadastro} options={{headerShown: false}}/>

            <Stack.Screen name= 'Home' component={Home} options={{headerShown: false}}/>

          </Stack.Navigator>
      </NavigationContainer>
  );
}



function App() {

  const [visibleModal, setVisableModal] = useState(false);
  
  const navigation = useNavigation()
  
  return (
      
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require('./img/logo.jpg')} />
        <Image style={styles.image} source={require('./img/telainicial.jpg')} />
  
  
        <TouchableOpacity style={[styles.button]} onPress={() => setVisableModal(true)}>
          <Text style={styles.text}>
            Vamos Lá
          </Text>
        </TouchableOpacity>
  
  
        <Modal 
       visible = {visibleModal}
       transparent={true}
       onRequestClose={() => setVisableModal(false)}
       animationType= "slide">
       
        <ActionModal
        handleClose={() => setVisableModal(false)}
        ActionLogin={() => {navigation.navigate('Login')}}
        ActionCadastro={() => {navigation.navigate('Cadastro')}}/>
       </Modal>
      </SafeAreaView>
    );
  }  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#91baa8',
  },
  button: {
    marginVertical: 100,
    textAlign: 'center',
    borderRadius: 7,
    backgroundColor: '#739c8a',
    padding: 10,
    shadowOpacity: 0.2
  },

  image: {
    marginTop: 200,
    alignItems: 'center',
    width: 330,
    height: 220,
  },

  logo: {
    marginTop: 30,
    alignItems: 'center',
    width: 180,
    height: 70,
  },

  text: {
    color: '#f6f8f3',
    fontSize: 20,
  fontFamily: 'DynaPuff-Bold'}
  }
)