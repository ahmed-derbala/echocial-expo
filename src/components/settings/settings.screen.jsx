import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Button, Text, View } from 'react-native'
import Header from '../header/header'
import Card from '../cards/card'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TimelineScreen from '../timeline/timeline.screen'

export const DetailsScreen = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Details!</Text>
		</View>
	)
}

export const SettingsScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings screen</Text>
			<Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
		</View>
	)
}

const SettingsStack = createStackNavigator()

export const SettingsStackScreen = () => {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					headerShown: false // change this to `false`
				}}
			/>
			<SettingsStack.Screen name="Details" component={DetailsScreen} />
		</SettingsStack.Navigator>
	)
}
