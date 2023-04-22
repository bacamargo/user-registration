import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import api from '../../../../api'

import io from '../../../../socket'

import { AreaStats as AreaStatsStyle } from './styles'

import List from './List'

const Home = ({ token }) => {
	const [request, setRequest] = useState({ status: null, finished: false })
	const [users, setUsers] = useState([])
	const [error, setError] = useState(false);

	io.on('connect_error', () => setRequest({ ...request, status: false }))
	io.on('connect', () => {
		!request.status && doRequest()
	})

	const doRequest = () => {
		api('/users', { headers: { 'Authorization': `bearer ${token}` } })
			.then(({ data }) => {
				setRequest({ status: true, finished: true })
				setUsers(data)
				setError(false);
			})
			.catch(e =>	{
				setError(true);
				setRequest({  status: false, finished: true })
			})	
	}

	useEffect(() => {
		!request.finished && doRequest(token)
	}, [token])

	return (
		<AreaStatsStyle>
			<List users={users} error={error} label='Users' color='#3282CD' icon='fa-user' />
		</AreaStatsStyle>
	)
}

const mapStateToProps = state => {
	const reduxProps = { }

	try {
		reduxProps.token = state.pageDashboard.user.token 
	} catch(e) {  }

	return ( reduxProps )
}


export default connect(mapStateToProps)(Home)
