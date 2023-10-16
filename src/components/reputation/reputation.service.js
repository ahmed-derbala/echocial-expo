import AsyncStorage from '@react-native-async-storage/async-storage'
import config from '../../config/config'
import { callApi, methods } from '../../core/api'
import { errorHandler } from '../../core/error'
import { log } from '../../core/log'
import { processLimit, processPage } from '../../core/pagination'

export const setRating = async ({ reputationId, rating, facebook }) => {
	try {
		const apiResp = await callApi({
			method: methods.put,
			resource: `/api/reputations/${reputationId}`,
			body: { reputationId, rating, facebook }
		})
		return apiResp
	} catch (err) {
		errorHandler({ err })
	}
}

export const createReputation = async ({ rating, facebook }) => {
	try {
		const apiResp = await callApi({
			method: methods.post,
			resource: `/api/reputations/`,
			body: { rating, facebook }
		})
		return apiResp
	} catch (err) {
		errorHandler({ err })
	}
}

export const getReputations = async ({ page, limit }) => {
	try {
		log({ level: 'debug', message: 'getReputations...', caller: 'getReputations' })
		page = processPage(page)
		limit = processLimit(limit)

		const apiResp = await callApi({
			method: methods.get,
			resource: `/api/reputations?page=${page}&limit=${limit}`
		})
		return apiResp
	} catch (err) {
		errorHandler({ err })
	}
}
