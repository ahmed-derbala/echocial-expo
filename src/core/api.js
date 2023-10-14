import config from '../config/config'
import { errorHandler } from './error'
import { log } from './log'

export const callApi = ({ method, resource, body }) => {
	return new Promise(async (resolve, reject) => {
		try {
			log({
				level: 'debug',
				req: { method, resource, body },
				caller: 'callApi'
			})
			let endpoint = `${config.backend.url}${resource}`

			let reqObject = {
				method,
				body: JSON.stringify(body),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			}
			if (['get', 'head'].includes(method)) delete reqObject.body

			let resp = await fetch(endpoint, reqObject)

			resp = await resp.json()
			//console.log('resp',resp)
			if (![200, 201].includes(resp.status)) {
				return reject(resp)
			}

			return resolve(resp.data)
		} catch (err) {
			//console.error('callApi catch...')
			return reject(err)
		}
	})
}

export const methods = {
	get: 'get',
	post: 'post',
	put: 'put'
}
