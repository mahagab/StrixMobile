import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Login from './Login'
import Cadastro from './Cadastro'

import Home from './Home'

import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'
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

const Stack = createNativeStackNavigator();
console.disableYellowBox = true;


export default function MyStack() {
  let [fontsLoaded] = useFonts({
    "DynaPuff-Bold": require('./src/assets/fonts/DynaPuff-Bold.ttf')
   })
  return (
      <NavigationContainer independent={true}> 
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
  
let [fontsLoaded] = useFonts({
 "DynaPuff-Bold": require('./src/assets/fonts/DynaPuff-Bold.ttf')
})

  return (
      
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require('./img/logo.jpg')} />
        <Image style={styles.image} source={require('./img/telainicial.jpg')} />
  
  
        <TouchableOpacity style={[styles.button]} onPress={() => setVisableModal(true)}>
          <Text style={[styles.text, {fontFamily: 'DynaPuff-Bold'}]}>
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
  fontFamily: 'DynaPuff-Bold'
}
  }
)