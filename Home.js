import React, { useState, useEffect } from 'react';
import {
	Text, View, StyleSheet,
	Image, SafeAreaView,
	TouchableOpacity, ScrollView,
	StatusBar, Linking,
	FlatList, TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconBot from 'react-native-vector-icons/MaterialCommunityIcons';
import ListItem from './src/ListItem';
import results from './results';
import { useFonts } from 'expo-font'
import { auth } from './firebase';
import { api } from './src/services/axios';
import Bot from './Chat'
import { useNavigation } from '@react-navigation/core'
import axios from 'axios';


console.disableYellowBox = true;


const HomeScreen = (props) => {

	let [fontsLoaded] = useFonts({
		"DynaPuff-Bold": require('./src/assets/fonts/DynaPuff-Bold.ttf'),
		"Dyna": require('./src/assets/fonts/DynaPuff-SemiBold.ttf')

	})

	const { navigation } = props

	const handleSignOut = () => {
		auth
			.signOut()
			.then(() => {
				navigation.replace("App")
			})
			.catch(error => alert(error.message))
	}

	return (

		<SafeAreaView style={styles.noticia}>
			<StatusBar />
			<View style={styles.bar}>

				<Text style={{ color: 'white', fontFamily: 'Dyna', fontSize: 23 }}>Notícias Quentes 🔥</Text>
				<TouchableOpacity onPress={handleSignOut} >
					<Text style={{ color: 'white', backgroundColor: '#85c77e', padding: 10, borderRadius: 30, fontFamily: 'Dyna' }}>SingOut</Text>
				</TouchableOpacity>
			</View>

			<ScrollView style={styles.scrollView}>

				<TouchableOpacity style={styles.btn} onPress={() => {
					Linking.openURL('https://www.techtudo.com.br/noticias/2022/10/playstation-stars-chega-ao-brasil-veja-vantagens-do-programa-de-fidelidade.ghtml');
				}}>
					<Image style={styles.image} source={require('./img/play.jpg')} />
					<Text style={styles.txtn}>PlayStation Stars chega ao Brasil</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.btn} onPress={() => {
					Linking.openURL('https://blog.br.playstation.com/2022/09/28/jogos-mensais-playstation-plus-de-outubro-injustice-2-hot-wheels-unleashed-e-superhot/');
				}}>
					<Image style={styles.image} source={require('./img/psplus.jpg')} />
					<Text style={styles.txtn}>Jogos Mensais PlayStation Plus outubro</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.btn} onPress={() => {
					Linking.openURL('https://mixdeseries.com.br/a-imperatriz-2a-temporada-todas-as-noticias-ate-agora/');
				}}>
					<Image style={styles.image} source={require('./img/imperatriz.jpg')} />
					<Text style={styles.txtn}>A Imperatriz, 2° temporada: todas as notícias até agora</Text>
				</TouchableOpacity>


			</ScrollView>
		</SafeAreaView>
	)
}


const ListScreen = () => {

	
    const [list, setList ] = useState([]);


const getList = () =>{


	api.get()
    .then((response) => setList(response.data))
    .catch((err) => {
      console.error('ops! ocorreu um erro' + err)
    })
}
console.log(list)

useEffect (() => {
  getList()
}, [])

async function del(id){

	axios.delete(`http://listmanagerrm84543.eastus.azurecontainer.io:8080/api/task/${id}`)
	.then(response => console.log('Delete successful'))
	.catch(error => {
		console.error('There was an error!', error);
	});
}

	return (
		<SafeAreaView style={styles.containerList}>
						<View style={styles.bar}>
 		<Text style={{ color: 'white', fontFamily: 'Dyna', fontSize: 23 }}> Sua lista</Text>
</View>
 <FlatList
        data={list}
        renderItem={({item})=>(
          <View style={styles.cardContainer}>
            <Text style={{fontFamily: 'Dyna'}}>{item.title}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
            <Text style={styles.status}>{item.status}</Text>
			<TouchableOpacity style={styles.remove} onPress={() => {del(item.id)}}><Text style={styles.txtr}>Remover</Text></TouchableOpacity>
          </View>
        )}
      />

		</SafeAreaView>
	);
}

function Danilo() {
	return <Bot/>
}

function PostScreen() {
	const [list, setList] = useState(results);
	const [searchText, setSearchText] = useState('');
	const [lista, setLista] = useState([])

	useEffect(() => {
		if (searchText === '') {
			setList(results);
		} else {
			setList(
				results.filter(
					(item) =>
						item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
				)
			);
		}
	}, [searchText]);


	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.searchArea}>
				<TextInput
					style={styles.input}
					placeholder="Pesquise por um Título"
					placeholderTextColor="#888"
					value={searchText}
					onChangeText={(t) => setSearchText(t)}
				/>

			</View>

			<FlatList
				data={list}
				style={styles.list}
				renderItem={({ item }) => (<ListItem data={item} />)}
				keyExtractor={(item) => item.id}
			/>

			<StatusBar style="light" />
		</SafeAreaView>
	);
}


const Tab = createBottomTabNavigator();

export default function Index() {
	return (
		<NavigationContainer independent={true}>
			<Tab.Navigator
				screenOptions={({ route }) => ({


					tabBarIcon: ({ color, size }) => {
						let iconName;

						switch (route.name) {
							case 'Home':
								iconName = 'home-outline';
								break;
							case 'List':
								iconName = 'view-list-outline';
								break;
							case 'Search':
								iconName = 'card-search-outline';
								break;
							case 'Settings':
								iconName = 'settings';
								break;
							default:
								iconName = 'robot-outline';
								break;
						}

						return <IconBot name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: '#85c77e',
					inactiveTintColor: '#777',
					tabBarStyle: [
						{
							display: "flex"
						},
						null
					],
				}}
			>
				<Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
				<Tab.Screen name="List" component={ListScreen} options={{ headerShown: false }} />
				<Tab.Screen name="Search" component={PostScreen} options={{ headerShown: false }} />
				<Tab.Screen name="ChatBot" component={Danilo} options={{ headerShown: false }} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#91baa8',
	},
	containerList: {
		flex: 1,
		backgroundColor: '#91baa8',
		
	},
	image: {
		width: "100%",
		height: 250,
		padding: 20,
		borderRadius: 10
	},
	bar: {
		backgroundColor: '#709886',
		fontSize: 30,
		width: "100%",
		height: "10%",
		padding: 15,
		color: "#f5f5f5",
		flexDirection: 'row',
		justifyContent: 'space-between'

	},
	list: {
		flex: 1,
	},
	noticia: {
		flex: 1,
		backgroundColor: '#91baa8',
	},
	scrollView: {
		backgroundColor: '#91baa8',
	},
	btn: {
		backgroundColor: '#f4f4f4',
		padding: 10,
		borderRadius: 10,
		marginVertical: "5%"
	},
	txtn: {
		padding: 10,
		fontSize: 17
	},
	input: {
		height: 50,
		backgroundColor: '#fff',
		margin: 30,
		borderRadius: 10,
		fontSize: 19,
		paddingLeft: 15,
		paddingRight: 15,
		color: '#000',
		width: '90%'
	},
	searchArea: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	cardContainer:{
		padding: 20,
		flexDirection:'row',
		justifyContent: 'space-around',
		marginVertical: "5%",
		backgroundColor: "#f5f5f5",
		borderRadius: 10,
		width: "100%",
		alignItems: 'center',
	},
	txtr:{
		backgroundColor: '#cc0000',
		color: 'white',
		padding: 8,
		borderRadius: 15
	},
	status: {
		marginRight: "30%",
		
	},


});