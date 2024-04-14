import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import config from '../../config'
import { width } from '../device'

const Header = ({ title }) => {
	if (!title) {
		title = config.app.name
	}
	return (
		<View style={styles.container}>
			<Text>{title} </Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		width,
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: 10
	}
})

export default Header
