import React, { Component } from 'react'
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const Avatar = ({ onPressAvatar }) => (
	<TouchableOpacity onPress={() => onPressAvatar()}>
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: 'http://placehold.it/100x100' }} />
			<Text style={styles.text}>Edit Photo</Text>
		</View>
	</TouchableOpacity>
)

var styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		height: 100,
		borderRadius: 50,
		width: 100,
		marginBottom: 5
	},
	text: {
		fontWeight: 'bold'
	}
})

export default Avatar
