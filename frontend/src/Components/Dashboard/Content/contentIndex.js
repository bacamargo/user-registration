import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Area as AreaStyle } from './contentStyle'

import Title from '../Title/titleIndex'
import Home from './Home/homeIndex'
import Admin from './Admin/adminIndex'

// conteúdo principal com as rotas para home e para admin, caso o usuário seja admin
const Content = ({ index }) => 
	<AreaStyle>
		<Title />
		<Router>
			<Route path='/dashboard/home' component={Home} />
			<Route path='/dashboard/admin' component={Admin} />
		</Router>
	</AreaStyle>

const mapStateToProps = state => {
	const index = state.pageDashboard.titles.index

	return ({ index })
}

export default connect(mapStateToProps)(Content)
