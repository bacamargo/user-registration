import axios from 'axios'

export const baseConfig = {
	baseURL: 'http://localhost:3000',
	headers: {
		'Content-Type': 'application/json',
		'bearer': ''
	}
}

const api = axios.create({ ...baseConfig })

export default api
	
