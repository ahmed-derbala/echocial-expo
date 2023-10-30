import { StyleSheet } from 'react-native'

const containerStyle = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
}

const profileStyles = StyleSheet.create({
	container: {
		light: {
			backgroundColor: '#d0d0c0',
			...containerStyle
		},
		dark: {
			backgroundColor: '#242c40',
			...containerStyle
		}
	},
	input: {
		width: 200,
		height: 44,
		padding: 10,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 10
	},
	lightContainer: {
		backgroundColor: '#d0d0c0'
	},
	darkContainer: {
		backgroundColor: '#242c40'
	},
	lightThemeText: {
		color: '#242c40'
	},
	darkThemeText: {
		color: '#d0d0c0'
	},
	cardContainer: {
		backgroundColor: '#242c40',
		borderWidth: 0,
		flex: 1,
		margin: 0,
		padding: 0
	},
	container: {
		flex: 1,
		backgroundColor: '#242c40'
	},
	scroll: {
		light: {
			backgroundColor: '#d0d0c0'
		},
		dark: {
			backgroundColor: '#242c40'
		}
	},
	actionButton: {
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		borderWidth: 0,
		borderRadius: 10
	}
})

const mainColor = {
	red: '#FF3B30',
	orange: '#FF9500',
	yellow: '#FFCC00',
	green: '#4CD964',
	tealBlue: '#5AC8FA',
	blue: '#007AFF',
	purple: '#5856D6',
	pink: '#FF2D55',

	white: '#FFFFFF',
	customGray: '#EFEFF4',
	lightGray: '#E5E5EA',
	lightGray2: '#D1D1D6',
	midGray: '#C7C7CC',
	gray: '#8E8E93',
	black: '#000000'
}

export default profileStyles
