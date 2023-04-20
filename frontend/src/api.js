import axios from 'axios'

export const baseConfig = {
	baseURL: 'http://localhost:3000',
	headers: {
		'Content-Type': 'application/json',
		'bearer': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwibmFtZSI6IkLDoXJiYXJhIENhbWFyZ28iLCJlbWFpbCI6ImJhcmJhcmFAZW1haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY4MTk5ODMxMiwiZXhwIjoxNjgyMjU3NTEyfQ.sw-D0T0WYL4wkzaRu2qUotkKurB6C2SmdJd8Vj4Qh6U'
	}
}

const api = axios.create({ ...baseConfig })

export default api
	
