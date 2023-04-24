export const userInLocalStorage = '__user'

// definição do estado inicial para cada dado, componente e página da aplicação
export const toasts = {
		autoDismiss: true,
	  	pouseOnHover: true		
	}

export const userData = {
	name: '',
	email: '',
	password: '',
	confirmPassword: ''
}	

export const pageAdmin = {

	global: {

		INITIO_INTABLE: {
		  ready: false, 
		  failed: false, 
		  filtered: [],
		  requesting: false
		},

		INITIO_MODE: {
		  label: 'Save',
		  color: 'primary',
		  exec: false
		},

		INITIO_DIVSEARCH: {
		  opened: false,
		  which: ''
		},

		INITIO_PAGINATION: {
			limit: 1,
			count: 1
		}

	},

	userComponent : {

		INITIO_INTABLE: {
		  mode: 'users', 
		  users: []
		},

		INITIO_USER: {
		  id: false,
		  email: '',
		  name: '',
		  password: '',
		  password2: '',
		  admin: false
		},

		INITIO_FILTERSTERMS: {
		  name: '', 
		  email: '', 
		  admin: 0 
		}

	}
}	
