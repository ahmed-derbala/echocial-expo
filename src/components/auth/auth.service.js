import AsyncStorage from '@react-native-async-storage/async-storage'
import config from '../../config/config'
import { callApi, methods } from '../../core/api'
import { errorHandler } from '../../core/error'
import { log } from '../../core/log'

export const saveToken = async (value) => {
	log({ level: 'debug', message: 'saveToken...' })

	try {
		await AsyncStorage.setItem(config.localKeys.token, value)
	} catch (err) {
		errorHandler({ err })
	}
}

export const getToken = async () => {
	try {
		const value = await AsyncStorage.getItem(config.localKeys.token)
		//console.log({ value })
		if (value !== null) {
			return value
			/* this.setState({
          jwt: value,
          loading: false
        });*/
		} else {
			return null
			/*   this.setState({
          loading: false
        });*/
		}
	} catch (err) {
		errorHandler({ err })
	}
}

export const deleteToken = async ({ navigation }) => {
	try {
		await AsyncStorage.removeItem(config.localKeys.token).then(() => {
			/* this.setState({
            jwt: ''
          })*/
		})
		navigation.navigate('Auth')
	} catch (err) {
		errorHandler({ err })
	}
}

export const signin = async ({ loginId, password }) => {
	return callApi({
		method: methods.post,
		resource: '/api/auth/signin',
		body: { loginId, password }
	})
}
