import React, { Component } from 'react'
import { StyleSheet, Text, Switch, View } from 'react-native'
import Separator from './Separator'

class SingleRowSwitch extends Component {
	render() {
		let { id, caption, value, onValueChange } = this.props
		return (
			<View style={styles.container}>
				<View style={styles.view}>
					<Text style={styles.caption}>{caption}</Text>
					<View style={styles.spacer}></View>
					<View style={styles.switch}>
						<Switch onValueChange={(val) => onValueChange(id, val)} value={value} />
					</View>
				</View>
				<Separator />
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		marginRight: 10,
		marginLeft: 10,
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center'
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
	switch: {
		flex: 0.6,
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	spacer: {
		flex: 0.1
	}
})

export default SingleRowSwitch
