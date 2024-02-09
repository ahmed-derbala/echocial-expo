import config from '../config'
import { errorHandler } from './error'
import { log } from './log'
import { getToken } from '../components/auth/auth.service'

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
					'Content-Type': 'application/json',
					token: await getToken()
				}
			}
			if (['get', 'head'].includes(method)) delete reqObject.body

			let resp = await fetch(endpoint, reqObject)

			resp = await resp.json()
			//console.log({resp})
			if (resp.status > 499) {
				return reject(resp)
			}

			return resolve(resp)
		} catch (err) {
			//console.error('callApi catch...')
			return reject(err)
		}
	})
}
