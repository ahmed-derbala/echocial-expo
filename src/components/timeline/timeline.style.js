import { StyleSheet } from 'react-native'

const timelineContainer = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
}
const timelineStyles = StyleSheet.create({
	container: {
		light: {
			backgroundColor: '#d0d0c0',
			...timelineContainer
		},
		dark: {
			backgroundColor: '242c40',
			...timelineContainer
		}
	}
})

export default timelineStyles
