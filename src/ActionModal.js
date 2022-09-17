import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';


export function ActionModal({handleClose, ActionLogin, ActionCadastro}) {

  return (
    <SafeAreaView style={styles.container}>

    <TouchableOpacity style={{flex: 1, zIndex: 9}} onPress={handleClose}/>

    <View style={styles.content}>
        <TouchableOpacity style={styles.bntAction} onPress={ActionLogin}>
            <Text style={styles.actiontext}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bntAction} onPress={ActionCadastro}>
            <Text style={styles.actiontext}>Cadastre-se</Text>
        </TouchableOpacity>
    </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,

        },
        content:{
            width: 317,
            marginBottom: 100,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal:60,
            backgroundColor: '#7e9d90',
            borderRadius: 6,
            height: 150
            

        },
        bntAction:{
            zIndex: 99,
            textAlign: 'center',
            borderRadius: 7,
            backgroundColor: '#739c8a',
            padding: 8,
            shadowOpacity: 0.15,
            elevation: 5,
            marginHorizontal: 20,
            alignItems: 'center'
        },
        actiontext:{
            color: '#f6f8f3',
            fontSize: 20,
          fontFamily: 'DynaPuff-Bold'
        }
        }

)