import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Button, Text, View } from 'react-native'
import Header from '../header/header'
import Card from '../cards/card'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TimelineScreen from '../timeline/timeline.screen'
import config from '../../config/config'
import { deleteToken } from '../auth/auth.service'
import * as React from 'react'

import { AuthContext } from '../../core/auth'

export const ProfileScreen = ({ navigation }) => {
	const { signOut } = React.useContext(AuthContext)

	return (
		<View>
			<Button title="Sign out" onPress={signOut} />
		</View>
	)
}

//renderItem={({ item }) => <TimelineCard facebook={item.facebook} rating={item.rating} _id={item._id} />}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ecf0f1'
	},
	input: {
		width: 200,
		height: 44,
		padding: 10,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 10
	}
})
