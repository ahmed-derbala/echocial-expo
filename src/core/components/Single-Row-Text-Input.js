import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Separator from './Separator'
import config from '../../config'

/*
const colorScheme = config.styles.colors.useColorScheme
const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText
const themeContainerStyle = colorScheme === 'light' ? config.styles.containers.light : config.styles.containers.dark
*/
const SingleRowTextInput = ({ id, caption, placeholder, value, onValueChange }) => (
	// <View style={[styles.container,themeContainerStyle]}>
	<View style={styles.container}>
		<View style={styles.view}>
			<Text style={styles.caption}>{caption}</Text>
			<View style={styles.spacer}></View>
			<TextInput underlineColorAndroid="transparent" placeholder={placeholder} style={styles.textInput} onChangeText={(text) => onValueChange(id, text)}>
				{value}
			</TextInput>
		</View>
		<Separator />
	</View>
)

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		marginRight: 10,
		marginLeft: 10,
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#242c40'
	},
	view: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10
	},
	caption: {
		flex: 0.3,
		fontWeight: 'bold'
	},
	textInput: {
		flex: 0.6,
		fontSize: 12,
		height: 40,
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		color: 'grey',
		textAlignVertical: 'center'
	},
	spacer: {
		flex: 0.1
	}
})

export default SingleRowTextInput
