import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font'
import axios from 'axios';


const
	ListItem = ({ data }) => {
		let [fontsLoaded] = useFonts({
			"DynaPuff": require('./assets/fonts/DynaPuff-Regular.ttf'),
			"DynaPuff-Bold": require('./assets/fonts/DynaPuff-Bold.ttf'),
		})
//http://listmanagerrm84543.eastus.azurecontainer.io:8080/api/task

/*
		const addList = () => axios({
			method: 'post',
			url: 'http://listmanagerrm84543.eastus.azurecontainer.io:8080/api/task',
			data: {
			  title: data.title,
			  status: data.status
			}
		  }).catch(console.log('deu errado'))

*/

async function post () {
    axios
      .post('http://listmanagerrm84543.eastus.azurecontainer.io:8080/api/task/',{
		title: data.title,
		status: data.status
	  })
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };

		return (
			<SafeAreaView style={styles.item}>
				<Image source={{ uri: data.url }} style={styles.img} />
				<View style={styles.itemInfo}>
					<Text style={styles.txt}>{data.title}</Text>
					<Text style={styles.genero}>{data.geMovie}</Text>
				</View>
				<TouchableOpacity style={styles.btn} onPress={post} ><Text style={styles.txtbtn}>Adicionar na Lista</Text></TouchableOpacity>
			</SafeAreaView>
		);
	};

const styles = StyleSheet.create({
	item: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: 8,
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#f1f6e0',
		paddingTop: 15,
		paddingBottom: 15,

	},
	itemInfo: {
		flexDirection: 'column',
		padding: 8,
		justifyContent: 'space-between',
		backgroundColor: '#f1f6e0',
		width: '100%',
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30

	},
	img: {
		width: 400,
		height: 200,
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30
	},
	btn: {
		backgroundColor: '#f0fff0',
		padding: 12,
		marginVertical: 20,
		borderRadius: 30
	},
	txtbtn: {
		fontSize: 17,
		fontFamily: 'DynaPuff'

	},
	txt: {
		fontSize: 20,
		fontFamily: 'DynaPuff-Bold'
	},
	genero: {
		fontSize: 15,
		fontFamily: 'DynaPuff'
	},
});

export default ListItem;
