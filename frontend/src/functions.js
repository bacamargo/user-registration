// para a tela de login, estabelecimento dos dados necessários e respostas de alerta ao preencher o formulário
export default {
	setFocus(id) {
		setTimeout(() => document.getElementById(id).focus(), 300)
	},

	verify(action, mode, data) {
	  if (action === 'user-form') {
	    if (mode === 'Edit') {
	      if (data.name === data.originalName && data.email === data.originalEmail && data.admin === data.originalAdmin) {
	        throw { message: 'Nothing was changed', appearance: 'warning', focus: false }
	      }
	    }

	    if (!data.email.trim() || !data.name.trim() || !data.password.trim() || !data.password2.trim()) {
	      throw { message: 'Invalid fields', appearance: 'warning', focus: false }
	    }

	    if (data.email.length < 6 || data.email.length > 50) {
	      throw { message: 'Invalid e-mail', appearance: 'warning', focus: 'inputEmail' }
	    }

	    if (data.name.length < 3 || data.name.length > 15) {
	      throw { message: 'Invalid name', appearance: 'warning', focus: 'inputName-User' }
	    }

	    if (data.password.length < 4 || data.password.length > 11) {
	      throw { message: 'Invalid password', appearance: 'warning', focus: 'inputPassword' }
	    } else {
	      if (data.password !== data.password2) {
	        throw { message: 'Passwords do not match', appearance: 'warning', focus: 'inputPassword2' }
	      }  
	    }
	  }
	}
}
