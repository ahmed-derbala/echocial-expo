import config from '../config'
import { log } from './log'

export const errorHandler = ({ err, caller }) => {
	try {
		if (config.NODE_ENV == 'production') return alert('error')

		let error = err
		//console.log('errorHandler.caller', errorHandler.caller)
		//console.log('errorhandler', err)
		if (err.message) {
			error = err.message
			alert(err.message)
		} else if (err.error) {
			error = err.error
			alert(err.error)
		} else alert(err)

		return log({
			level: 'error',
			error,
			req: err.req,
			message: err.message,
			caller
		})
	} catch (e) {
		console.error(e)
	}
}
