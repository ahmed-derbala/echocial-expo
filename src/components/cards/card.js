import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { width, height } from '../../core/device'

const Card = () => {
	return (
		<View style={styles.cardContainer}>
			<Text> cardgggxxx</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		width: width / 1.1,
		height: height / 4,
		borderRadius: 10,
		backgroundColor: 'green',
		alignItems: 'center'
	}
})

export default Card
