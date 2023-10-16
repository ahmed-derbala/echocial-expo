import config from '../config/config'

export const processLimit = (limit) => {
	limit = parseInt(limit) || config.pagination.defaultLimit
	if (limit < config.pagination.minLimit) limit = config.pagination.minLimit
	if (limit > config.pagination.maxLimit) limit = config.pagination.maxLimit
	return limit
}

export const processPage = (page) => {
	page = parseInt(page) || 1
	if (page < 1) page = 1
	return page
}
