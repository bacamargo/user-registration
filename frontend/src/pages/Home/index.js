import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FormGroup, Label, Input, Col, Row, Button } from 'reactstrap'
import { useToasts } from 'react-toast-notifications'

import api from '../../api'

import * as actions from '../../store/reducers/dashboard/actions'

import { userData, toasts, userInLocalStorage } from '../../initio_states'

import { Area as AreaStyle, AreaLimit as AreaLimitStyle, Content as ContentStyle, Base as BaseStyle } from './styles'

import Header from '../../Components/Both/Header'


/* autenticação na página de login e mensagens disparadas em casos de inconsistência */
const Home = ({ dispatch, history }) => {
	const [login, setLogin] = useState(true)
	const [user, setUser] = useState({ ...userData })

	const { addToast } = useToasts()

	const submit = e => {
		e.preventDefault()

		if (login) {
			if (!user.email.length || !user.password.length) {
				addToast('Please, fill in all fields', { ...toasts, appearance: 'warning' })

				return
			}

			if (user.email.length < 6 || user.email.length > 50) {
				addToast('Invalid e-mail', { ...toasts, appearance: 'warning' })

				return
			}

			if (user.password.length < 5 || user.password.length > 15) {
				addToast('Invalid password', { ...toasts, appearance: 'warning' })

				return
			}

			api.post('/signin', { email: user.email, password: user.password })
				.then(({ data }) => {
					console.log('data ', data)
					dispatch(actions.setUser(data))
					localStorage.setItem(userInLocalStorage, JSON.stringify(data))

					history.push('/dashboard')
				}).catch(() => {
					addToast('There is some wrong info', { ...toasts, appearance: 'error' })
				})
		} else {
			if (!user.name.length || !user.email.length || !user.password.length || !user.confirmPassword.length) {
				addToast('Please, fill in all fields', { ...toasts, appearance: 'warning' })

				return
			}

			if (user.name.length < 2 || user.name.length > 15) {
				addToast('Invalid name', { ...toasts, appearance: 'warning' })

				return	
			}

			if (user.email.length < 6 || user.email.length > 50) {
				addToast('Invalid e-mail', { ...toasts, appearance: 'warning' })

				return
			}

			if (user.password.length < 5 || user.password.length > 15) {
				addToast('Invalid password', { ...toasts, appearance: 'warning' })

				return
			} else {
				if (user.password === user.confirmPassword) {
					api.post('/signup', user)
						.then(({ data }) => {
							setUser({ ...userData })
							setLogin(true)
							addToast('Successfully registered', { ...toasts, appearance: 'success' })
						}).catch(() => {
							addToast('Register was not updated', { ...toasts, appearance: 'error' })
						})
				} else {
					addToast('Passwords do not match', { ...toasts, appearance: 'warning' })
				}
			}
		}
	}

	/* checagem se já existe um usuário logado na sessão e validade do token */
	useEffect(() => {
		let user = localStorage.getItem(userInLocalStorage)

		if (user) {
			user = JSON.parse(user)
			if (parseInt(Date.now() / 1000) < user.exp) {
				if (window.confirm(`There's already a user signed in. Would you like to proceed with ${user.name}? `)) {
					delete user.password
					dispatch(actions.setUser(user))
					history.push('/dashboard')	
				} else {
					localStorage.removeItem(userInLocalStorage)
				}
			} else {
				localStorage.removeItem(userInLocalStorage)
				addToast('Last user has an expired token', { ...toasts, appearance: 'info' })
			}
		}
	}, [history, dispatch, addToast])

	/* Formulario para preenchimento para cadastrar usuário na base ou fazer login na aplicação */
	return <AreaStyle>
		<Header />
		<ContentStyle>
			<AreaLimitStyle onSubmit={submit} autoComplete='off'>
				<strong>Welcome</strong>
				<hr />
				{ login ? <div>
					<FormGroup>
	          <Label for="signinEmail">E-mail</Label>
	          <Input value={ user.email } type="email" id="signinEmail" maxLength='50' minLength='6' placeholder="E-mail" onChange={({ target }) => setUser({ ...user, email: target.value })} />
	        </FormGroup>
	        <FormGroup>
	          <Label for="signinPassword">Password</Label>
	          <Input value={ user.password } type="password" id="signinPassword" maxLength='15' minLength='5' placeholder="Password" onChange={({ target }) => setUser({ ...user, password: target.value })} />
	        </FormGroup>
				</div> : <div>
					<FormGroup>
	          <Label for="signupName">Name</Label>
	          <Input value={ user.name } type="text" id="signupName" placeholder="Name" maxLength='15' minLength='2' onChange={({ target }) => setUser({ ...user, name: target.value })} />
	        </FormGroup>
					<FormGroup>
	          <Label for="signupEmail">E-mail</Label>
	          <Input value={ user.email } type="email" id="signupEmail" maxLength='50' minLength='6' placeholder="E-mail" onChange={({ target }) => setUser({ ...user, email: target.value })} />
	        </FormGroup>
	        <Row>
	        	<Col>
	        		<FormGroup>
			          <Label for="signupPassword1">Password</Label>
			          <Input value={ user.password } type="password" id="signupPassword1" maxLength='15' minLength='5' placeholder="Password" onChange={({ target }) => setUser({ ...user, password: target.value })} />
			        </FormGroup>	
	        	</Col>
	        	<Col>
	        		<FormGroup>
			          <Label for="signupPassword2">Confirmation</Label>
			          <Input value={ user.confirmPassword } type="password" id="signupPassword2" maxLength='15' minLength='5' placeholder="Confirm password" onChange={({ target }) => setUser({ ...user, confirmPassword: target.value })} />
			        </FormGroup>
	        	</Col>
	        </Row>
				</div> }
				<BaseStyle>
					<Button color='secondary' onClick={() => setUser({ ...userData })}>Clear</Button>
					<Button color='primary' type='submit'>{ login ? 'Log in' : 'Register' }</Button>
				</BaseStyle>
				<span onClick={() => {
					setUser({ ...userData })
					setLogin(!login)
				}}>{ login ? 'Create account' : 'Already have an account' }</span>
			</AreaLimitStyle>
		</ContentStyle>
	</AreaStyle>
}

const mapStateToProps = state =>
	({})

export default connect(mapStateToProps)(Home)
