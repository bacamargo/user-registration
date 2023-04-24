import React from 'react'
import { NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'

// para navegar nas abas, caso exista mais de uma. Para esse projeto, existe apenas a aba de usuários
const Tab = ({ index, label, tab, setTab }) =>
	<NavItem style={{ cursor: 'pointer' }}>
		<NavLink className={classnames({ active: tab === index })}
      onClick={() => setTab(index) } >
      { label }
		</NavLink>
	</NavItem>

export default Tab
	