import React from 'react'
import { connect } from 'react-redux'
import Gravatar from 'react-gravatar'
import hash from 'hash.js'

import * as actions from '../../../../store/reducers/dashboard/actions'

import { userInLocalStorage } from '../../../../initio_states'

import { DropDown as DropDownStyle, DropDownVisible as DropDownVisibleStyle, DropDownHidden as DropDownHiddenStyle
} from './dropDownStyle'

const makeHash = email => hash.sha256().update(email).digest('hex')

// configurações do menu que desce ao passar o cursor do mouse pelo nome do usuário ativo na aplicação 
const DropDown = ({ name, email, admin, dispatch, history }) => 
  <DropDownStyle>
    <DropDownVisibleStyle>
      { name }
      <Gravatar email={makeHash(email)} size={30} />
      <i className='fa fa-angle-down'></i>
    </DropDownVisibleStyle>
    <DropDownHiddenStyle>
      <span><i className='fa fa-cog'></i><a href="/dashboard/home">Dashboard</a></span>
      { admin ? <span><i className='fa fa-cog'></i><a href="/dashboard/admin">Admin</a></span> : null }
      <span onClick={() => {
        dispatch(actions.logout())
        localStorage.removeItem(userInLocalStorage)
        history.push('/')
      }}><i className='fa fa-times-circle'></i><label>Logout</label></span>
    </DropDownHiddenStyle>
  </DropDownStyle>

const mapStateToProps = state => 
  (
    { name: 
       state.pageDashboard.user.name,
      email: 
       state.pageDashboard.user.email,
      admin:
       state.pageDashboard.user.admin
    }
  )

export default connect(mapStateToProps)(DropDown)
