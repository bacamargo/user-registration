import React, { useState, useEffect } from 'react'
import { useToasts } from 'react-toast-notifications'
import PaginationComponent from 'react-reactstrap-pagination'
import { Table, Button, Form, FormGroup, Label, Input, Row, Col, CustomInput } from 'reactstrap'

import io from '../../../../../../socket'

import * as doSearch from './search'
import { searchByName } from '../search'

import functions from '../../../../../../functions'

import api from '../../../../../../api'

import { pageAdmin, toasts } from '../../../../../../initio_states'

import {
	Tr as TrStyle,
	Thead as TheadStyle,	
	Search as SearchStyle,
  Filter as FilterStyle,
  TheadTitle as TheadTitleStyle,
  PaginationArea as PaginationAreaStyle
} from '../../styles'

import DropUp from '../DropUp'
import AdminDropUp from './dropsUp/Admin'

const User = ({ token }) => {
  const { addToast } = useToasts()
  const [pageActual, setPageActual] = useState(1)
  const [pageSettings, setPageSettings] = useState({ ...pageAdmin.global.INITIO_PAGINATION })
  const [divSearch, setDivSearch] = useState({ ...pageAdmin.global.INITIO_DIVSEARCH })
  const [filtersTerms, setFiltersTerms] = useState({ ...pageAdmin.userComponent.INITIO_FILTERSTERMS })
  const [filter, setFilter] = useState(['All', ''])
	const [mode, setMode] = useState({ ...pageAdmin.global.INITIO_MODE })
	const [user, setUser] = useState({ ...pageAdmin.userComponent.INITIO_USER })
	const [inTable, setInTable] = useState({ ...pageAdmin.userComponent.INITIO_INTABLE, ...pageAdmin.global.INITIO_INTABLE })

  const doRequest = (p) => {
    api.get(`/users?page=${p || 1}`, { headers: { Authorization: `bearer ${ token }` } })
      .then(({ data }) => {
            setPageSettings({ count: data.count || 1, limit: data.limit })
            const users = { ...pageAdmin.userComponent.INITIO_INTABLE }
            users.users = data.data
            users.ready = true
            users.failed = false
            setInTable(users)
          })
      .catch(e => {
        const users = { ...pageAdmin.userComponent.INITIO_INTABLE }
        users.ready = true
        users.failed = true
        setInTable(users)
      })
  }

  io.on('connect', () => {
    inTable.failed && doRequest(pageActual)
  })

  io.on('disconnect', () => {
    setInTable({ ...inTable, failed: true })
  })

	useEffect(() => {
    doRequest()
	}, [token])

  const search = (functionName, key) => {
    let result

    if (functionName === 'searchByName') result = searchByName('users', filtersTerms, filter, inTable, key)
    else result = doSearch[functionName](filtersTerms, filter, inTable, key)

    const  { inTable: newInTable, filter: newFilter, filtersTerms: newFiltersTerms } = result

    setInTable({ ...newInTable, ready: newInTable.ready ? true : false})
    setFiltersTerms(newFiltersTerms)
    setFilter(newFilter)

    if (newInTable.mode === 'users') noFilter()
  }

  const noFilter = () => {
    setInTable({ ...inTable, mode: 'users' })
    setFiltersTerms({ ...pageAdmin.userComponent.INITIO_FILTERSTERMS })
    setFilter(['All', ''])
  }

  const openOrCloseDivSearch = which => {
    const opened = divSearch.which === which ? false : true

    if (opened) {
      setFiltersTerms({ ...pageAdmin.userComponent.INITIO_FILTERSTERMS })
      window.onkeyup = ({ keyCode }) => {
        if (keyCode === 27) {
          setInTable({ ...inTable, mode: 'users' })
          setFilter(['All', ''])
          setDivSearch({ ...pageAdmin.userComponent.INITIO_DIVSEARCH })
        }
      }
    } else {
      setInTable({ ...inTable, mode: 'users' })
      setFilter(['All', ''])
      window.onkeyup = () => {}
    }

    which !== 'admin' && functions.setFocus(`input-search-${which}`)

    setDivSearch({ opened, which: opened ? which : '' })
  }

  const submit = e => {
    e.preventDefault()

    try {
      functions.verify('user-form', mode.label, user)

      setMode({ ...mode, exec: true })

      const data = { 
        id: user.id,
        email: user.email, 
        name: user.name, 
        admin: user.admin,
        password: user.password,
        confirmPassword: user.password2 
      }

      switch(mode.label) {
        case 'Delete':
          api
            .delete(`/users/${user.id}`, { headers: { Authorization: `bearer ${ token }` } })
            .then(() => {
              addToast('Successfully deleted', { ...toasts, appearance: 'info' })
              setUser({ ...pageAdmin.userComponent.INITIO_USER })
              setMode({ ...pageAdmin.global.INITIO_MODE })    

              if (inTable.users.length - 1 === 0) {
                doRequest(pageActual - 1)
                setPageActual(pageActual - 1)
              } else doRequest(pageActual)
            
            }).catch(() => {
              setMode({ ...mode, exec: false })
              addToast('It was not possible to delete', { ...toasts, appearance: 'error' })
            })
          break
        case 'Edit':
          api 
            .put(`/users/${user.id}`, data, { headers: { Authorization: `bearer ${ token }` } })
            .then(() => {
              if (user.id) {
                const newUsers = { ...inTable }
                newUsers.users = newUsers.users.map(user => user.id === data.id ? data : user)
                setInTable(newUsers)
              }
              setUser({ ...pageAdmin.userComponent.INITIO_USER })
              setMode({ ...pageAdmin.global.INITIO_MODE })
              addToast('User successfully updated', { ...toasts, appearance: 'success' })
            })
            .catch(() => {
              setMode({ ...mode, exec: false })
              addToast('Update failed', { ...toasts, appearance: 'error' })
            })
          break
         default:
          api
            .post('/users', data, { headers: { Authorization: `bearer ${ token }` } })
            .then(() => {
              setMode({ ...pageAdmin.global.INITIO_MODE })
              setUser({ ...pageAdmin.userComponent.INITIO_USER })

              if (inTable.users.length < pageSettings.limit) {             
                doRequest(pageActual)
              } else {
                setPageSettings({ ...pageSettings, count: pageSettings.count + 1 })
              }
              addToast('User successfully registered', { ...toasts, appearance: 'success' })
            })
            .catch(() => {
              setMode({ ...mode, exec: false })
              addToast('Register not made', { ...toasts, appearance: 'error' })
            })   
      }
    } catch({ message, appearance, focus }) {
      addToast(message, { ...toasts, appearance: appearance})
      setMode({ ...mode, exec: false })
      focus && functions.setFocus(focus)
    }
  }

	return (
    <div>
      <Form 
        style={{ maxWidth: '900px', margin: 'auto', padding: '10px' }}
        onSubmit={submit}
        autoComplete='off'>
        <Row>
          <Col md='6' sm='12'>
            <FormGroup>
              <Label htmlFor='inputEmail'>E-mail</Label>
              <Input readOnly={ mode.label === 'Delete' } type='email' name='email' id='inputEmail' placeholder='E-mail' minLength='6' maxLength='50' value={user.email} onChange={({ target }) => setUser({ ...user, email: target.value })} />
            </FormGroup>
          </Col>
          <Col md='6' sm='12'>
            <FormGroup>
              <Label htmlFor='inputName-User'>Name</Label>
              <Input readOnly={ mode.label === 'Delete' } name='name' id='inputName-User' placeholder='User name' minLength='3' maxLength='14' value={user.name} onChange={({ target }) => setUser({ ...user, name: target.value })} />
            </FormGroup>
          </Col>
          <Col md='6' sm='12'>
            <FormGroup>
              <Label htmlFor='inputPassword1'>Password</Label>
              <Input type='password' name='password' id='inputPassword1' placeholder='Password' minLength='4' maxLength='11' value={user.password} onChange={({ target }) => setUser({ ...user, password: target.value })} />
            </FormGroup>
          </Col>
          <Col md='6' sm='12'>
            <FormGroup>
              <Label htmlFor='inputPassword2'>Confirm password</Label>
              <Input type='password' name='passwordConfirm' id='inputPassword2' placeholder='Confirm password' minLength='4' maxLength='11' value={user.password2} onChange={({ target }) => setUser({ ...user, password2: target.value })} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup check>
              <Label check>
                { mode.label === 'Delete' ? `User ${user.admin ? 'is' : 'not'} admin ` : <CustomInput checked={ user.admin } type='switch' id='switch-adm' name='admin' label='Admin' onChange={() => setUser({ ...user, admin: !user.admin })} /> } 
              </Label>
            </FormGroup>
          </Col> 
        </Row>
        <Row>
          <Col className='pt-2'>
            <Button type='submit' color={mode.color} size='md' disabled={ mode.exec }>{ mode.label }</Button>
            <Button type='button' color='secondary' className='ml-2' size='md' disabled={ mode.exec } onClick={() => {
              setUser({ ...pageAdmin.userComponent.INITIO_USER })
              setMode({ ...pageAdmin.global.INITIO_MODE })
            }}>Cancel</Button>
          </Col>
        </Row>
      </Form>
  	  <Table striped>
        <thead>
          <tr>
            <TheadTitleStyle colSpan='5'>
              <FilterStyle on={ filter[0] !== 'All' }><i title='Tirar filtro' onClick={ noFilter } className='fa fa-power-off'></i> { filter[0].length ? filter.join(' > ') : 'All >' }</FilterStyle>
              Platform users
            </TheadTitleStyle>
          </tr>
          <tr>
            <TheadStyle>#</TheadStyle>
            <TheadStyle active={ divSearch.opened && divSearch.which === 'name-user' } term={ filter[0] === 'Name' } className='dropup'>Name 
              <SearchStyle visible={ divSearch.opened && divSearch.which === 'name-user' }> <DropUp placeholder='Filter by name' id='input-search-name-user' search={ key => search('searchByName', key) } value={ filtersTerms.name } /> </SearchStyle>
              <span className='icon-filter' onClick={ () => openOrCloseDivSearch('name-user') } title='Filter by name'><i className='fa fa-filter'></i></span>
            </TheadStyle>
            <TheadStyle active={ divSearch.opened && divSearch.which === 'email-user' } term={ filter[0] === 'Email' } className='dropup'>E-mail 
              <SearchStyle visible={ divSearch.opened && divSearch.which === 'email-user' }> <DropUp placeholder='Filter by e-mail' id='input-search-email-user' search={ key => search('searchByEmail', key) } value={ filtersTerms.email } /> </SearchStyle>
              <span className='icon-filter' onClick={ () => openOrCloseDivSearch('email-user') } title='Filter by e-mail'><i className='fa fa-filter'></i></span>
            </TheadStyle>
            <TheadStyle active={ divSearch.opened && divSearch.which === 'admin' } term={ filter[0] === 'Admin' } className='dropup'>Admin
              <SearchStyle visible={ divSearch.opened && divSearch.which === 'admin' }> <AdminDropUp search={ key => search('searchByAdmin', key) } value={ filtersTerms.admin } /> </SearchStyle>
              <span className='icon-filter' onClick={ () => openOrCloseDivSearch('admin') } title='Filtrar by privilege'><i className='fa fa-filter'></i></span>
            </TheadStyle>  
            <TheadStyle style={{ width: '152px' }}>Actions</TheadStyle>
          </tr>
        </thead>
        <tbody>
        	{ inTable.ready ? inTable[inTable.mode].length ? inTable[inTable.mode].map(({ id, name, email, admin }, index) => 
          		<TrStyle scope='row' key={ email }>
                <td> { index + 1 }</td>
                <td> { name } </td>
                <td> { email } </td>
                <td> { admin ? 'Yes': 'No' } </td>
                <td>
                  <Button onClick={() => {
                    setDivSearch({ ...pageAdmin.global.INITIO_DIVSEARCH })
                    setUser({ ...pageAdmin.userComponent.INITIO_USER, id, name, email, admin, originalName: name, originalEmail: email, originalAdmin: admin })
                    setMode({ label: 'Edit', color: 'warning' })
                  }} color={ mode.label === 'Edit' ? user.id === id ? 'secondary': 'warning' : 'warning' } disabled={ mode.label === 'Edit' ? user.id === id : false } size='sm'>Edit</Button>
                  <Button className='ml-2' onClick={() => {
                    setDivSearch({ ...pageAdmin.global.INITIO_DIVSEARCH })
                    setUser({ ...pageAdmin.userComponent.INITIO_USER, id, name, email, admin })
                    setMode({ label: 'Delete', color: 'danger' })
                  }} color={ mode.label === 'Delete' ? user.id === id ? 'secondary' : 'danger' : 'danger' } disabled={ mode.label === 'Delete' ? user.id === id : false } size='sm'>Delete</Button>
                </td>
              </TrStyle>
        	) : <tr><td colSpan='5' style={{ textAlign: 'center' }}>{ inTable.failed ? 'Reconnecting..' : 'No one found :(' }</td></tr> :
          <tr><td colSpan='5' style={{ textAlign: 'center' }}>Loading...</td></tr> }
        </tbody>
      </Table>
    </div>
	) 
}

export default User
