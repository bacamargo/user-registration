import React from 'react'
import { connect } from 'react-redux'

import { Area as AreaStyle } from './styles'

import Title from '../Title/'
import Home from './Home/'
import Admin from './Admin/'

const Content = ({ index }) => 
	<AreaStyle>
		<Title />
		{ index === 0 && <Home /> }
		{ index === 1 && <Admin /> }
	</AreaStyle>

const mapStateToProps = state => {
	const index = state.pageDashboard.titles.index

	return ({ index })
}

export default connect(mapStateToProps)(Content)
