import AsyncStorage from '@react-native-async-storage/async-storage'
import config from '../../config/config'
import { errorHandler } from '../../core/error'
import { log } from '../../core/log'
import authAPI from './auth.api'

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

export const deleteToken = async () => {
	try {
		await AsyncStorage.removeItem(config.localKeys.token).then(() => {
			/* this.setState({
            jwt: ''
          })*/
		})
	} catch (err) {
		errorHandler({ err })
	}
}