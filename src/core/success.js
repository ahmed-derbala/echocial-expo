import config from '../config'
import { log } from './log'

export const successHandler = ({ message, caller }) => {
	try {
		if (!message) message = 'success'
		if (config.NODE_ENV == 'production') return alert('success')

		alert(message)

		return log({
			level: 'debug',
			message,
			caller
		})
	} catch (e) {
		console.error(e)
	}
}
