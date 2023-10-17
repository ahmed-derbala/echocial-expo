import { callApi, methods } from '../../core/api'

export const signin = async ({ loginId, password }) => {
	return callApi({
		method: methods.post,
		resource: '/api/auth/signin',
		body: { loginId, password }
	})
}
