import packagejson from '../../package.json'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'

export default {
	NODE_ENV: 'local', //production | development | local
	app: {
		name: packagejson.name
	},
	backend: {
		url: 'http://192.168.100.11:5001'
	},
	auth: {
		jwt: {
			privateKey: packagejson.name
		}
	},
	localKeys: {
		token: 'token'
	},
	pagination: {
		minLimit: 1,
		defaultLimit: 100, //limit to use when no limit is provided
		maxLimit: 300
	},
	styles: {
		containers: {
			dark: {
				backgroundColor: '#242c40'
			},
			light: {
				backgroundColor: '#d0d0c0'
			},
			default: {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#ecf0f1'
			}
		},
		colors: {
			light: {
				background: 'white',
				secondaryBackground: '#f2f2f2',
				text: 'black',
				icons: '#e68a00',
				button: 'black',
				buttonText: '#e68a00'
			},
			dark: {
				background: 'black',
				secondaryBackground: '#1e1e1e',
				text: '#FFFFFF',
				icons: 'orange',
				button: 'orange',
				buttonText: 'black'
			}
		}
	},
	themes: {
		light: {
			...DefaultTheme,
			dark: true,
			colors: {
				...DefaultTheme.colors,
				text: '#616161',
				card: '#f9f9f9',
				border: '#9F9F9F',
				primary: '#333333',
				background: '#ffffff'
			}
		},
		dark: {
			...DarkTheme,
			dark: false,
			colors: {
				...DarkTheme.colors,
				text: '#dadada',
				card: '#191919',
				border: '#444859',
				primary: '#f9f9f9',
				background: '#121212'
			}
		}
	}
}
