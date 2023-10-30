import { callApi } from '../../core/api'

export const getMyProfileAPI = async () => {
	return callApi({
		method: 'get',
		resource: '/api/users/profile/'
	})
}
