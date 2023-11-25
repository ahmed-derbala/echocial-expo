import config from '../config'

export const log = ({ level, message, req, error, caller }) => {
	if (config.NODE_ENV === 'production') return

	if (!level) level = 'debug'

	let logObject = { level, message, req: JSON.stringify(req), error, caller }
	for (const [key, value] of Object.entries(logObject)) {
		if (value === undefined) {
			delete logObject[key]
		}
	}

	switch (level) {
		case 'debug':
			console.debug(logObject)
			break
		case 'warn':
			console.warn(logObject)
			break
		case 'error':
			console.log(logObject)
			break
		default:
			console.log(logObject)
	}

	return logObject
}
