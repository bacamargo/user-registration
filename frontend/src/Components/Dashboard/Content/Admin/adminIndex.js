import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TabContent, Nav,Card } from 'reactstrap'

import Tab from './Tab/tabIndex'
import User from './tabsContent/User/userIndex'

// chamada para a lista de usuários na página de administrador
const Admin = ({ token }) => {
	const [tab, setTab] = useState('1')

	return (
		  <Card style={{ maxWidth: '1250px', margin: 'auto' }}>
        <Nav tabs>
          <Tab label='Users' tab={ tab } setTab={ setTab } index='1' />
        </Nav>
        <TabContent activeTab={tab}>
            { tab === '1' && <User token={ token } /> }
        </TabContent>
      </Card>
	)
}

const mapStateToProps = state => {
  const reduxProps = {  }

  try {
    reduxProps.token = state.pageDashboard.user.token
  } catch(e) {  }

  return reduxProps
}

export default connect(mapStateToProps)(Admin)
