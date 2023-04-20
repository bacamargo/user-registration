import React, { useState } from 'react'
import { connect } from 'react-redux'
import TreeMenu from 'react-simple-tree-menu'


import * as actions from '../../../store/reducers/dashboard/actions'

import { 
	Area as AreaStyle 
} from './styles'

const Menu = ({ menu, token, index, dispatch }) => {
	const [node, setNode] = useState([])
	const [requestSituation, setRequestSituation] = useState({ failed: false })


	return menu && <AreaStyle>
			{ !requestSituation.failed ? node.length ? +
					<TreeMenu onClickItem={({ id }) => {
						if (index !== 0) {
							dispatch(actions.toggleTitle(0))
						}
					}} data={node} />
			 : <p></p> : <p></p> }
		</AreaStyle>		
} 

const mapStateToProps = state => {
	const reduxProps = { menu: state.pageDashboard.menu, index: state.pageDashboard.titles.index }
	
	try {
		reduxProps.token = state.pageDashboard.user.token
	} catch (e) {  }

	return reduxProps
}

export default connect(mapStateToProps)(Menu)

