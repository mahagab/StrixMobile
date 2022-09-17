import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import IconBot from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-web';

//import Chatbot from './Chatbot'


function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
		
		</SafeAreaView>
	);
}

function ListScreen() {
	return (
		<View style={styles.container}>
			<Text>Categories!</Text>
		</View>
	);
}

function ChatBot() {
	return (
		<View style={styles.container}>
			<Text>Categories!</Text>
		</View>
	);
}

function PostScreen() {
	return (
		<View style={styles.container}>
			<Text>New Post!</Text>
		</View>
	);
}

function NotificationsScreen() {
	return (
		<View style={styles.container}>
			<Text>Notifications!</Text>
		</View>
	);
}

function SettingsScreen() {
	return (
		<View style={styles.container}>
			<Text>Settings!</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
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
				case 'Categories':
					iconName = 'view-list-outline';
					break;
				case 'Post':
					iconName = 'post-outline';
					break;
				case 'Notifications':
					iconName = 'bell-outline';
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
				<Tab.Screen name="Home" component={HomeScreen}  options={{headerShown: false}} />
				<Tab.Screen name="Categories" component={ListScreen} options={{headerShown: false}}/>
				<Tab.Screen name="Post" component={PostScreen}  options={{headerShown: false}}/>
				<Tab.Screen name="Notifications" component={NotificationsScreen}  options={{headerShown: false}}/>
				<Tab.Screen name="ChatBot" component={ChatBot}  options={{headerShown: false}}/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: '#91baa8'
	},
	header: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: '#000',
	color:'#fff'
	},
});