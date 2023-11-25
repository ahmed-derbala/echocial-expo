import AsyncStorage from '@react-native-async-storage/async-storage'
import config from '../../config'
import { callApi } from '../../core/api'
import { errorHandler } from '../../core/error'
import { log } from '../../core/log'
import { processLimit, processPage } from '../../core/pagination'
import { successHandler } from '../../core/success'

export const setRating = async ({ reputationId, rating, facebook }) => {
	try {
		const apiResp = await callApi({
			method: 'put',
			resource: `/api/reputations?reputationId=${reputationId}`,
			body: { rating, facebook }
		})
		return apiResp
	} catch (err) {
		errorHandler({ err })
	}
}

export const createReputation = async ({ rating, facebook }) => {
	try {
		const apiResp = await callApi({
			method: 'post',
			resource: `/api/reputations/`,
			body: { rating, facebook }
		})
		successHandler({ message: 'Reputation created successfully' })
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
			method: 'get',
			resource: `/api/reputations?page=${page}&limit=${limit}`
		})
		return apiResp
	} catch (err) {
		errorHandler({ err })
	}
}
