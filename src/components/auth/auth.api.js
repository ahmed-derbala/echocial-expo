import { callApi } from '../../core/api'

export const signin = async ({ loginId, password }) => {
	return callApi({
		method: 'post',
		resource: '/api/auth/signin',
		body: { loginId, password }
	})
}
