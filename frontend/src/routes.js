import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'

import io from './socket'

import { toasts } from './initio_states'

import Home from './pages/Home/'
import Dashboard from './pages/Dashboard'

const Routes = () => {
	const { addToast } = useToasts()

	useEffect(() => {
		io.on('reconnect', () => {
			addToast('Reconnecting..', {
				...toasts,
				autoDismiss: true,
				appearance: 'error'
			})
		})
	})

	useEffect(() => {
		io.on('disconnect', () => {
			addToast('Server is down :(', { 
				...toasts,
				autoDismiss: false,
			  appearance: 'error'
			})
		})

		io.on('connect', () => {
			addToast('Server running :)', { 
				...toasts,
				autoDismiss: false,
		    appearance: 'success'
			})
		})
	}, [])

	return (
		<Router>
			<Route exact path='/' component={Home} />
			<Route path='/dashboard' component={Dashboard} />
			<Route from='*' to='/' />
		</Router>
	)
}

export default Routes
