import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	separator: {
		flex: 1,
		flexDirection: 'row',
		borderColor: '#EDEDED',
		borderWidth: 0.8
	}
})

const Separator = () => (
	<View style={styles.container}>
		<View style={styles.separator} />
	</View>
)

export default Separator
