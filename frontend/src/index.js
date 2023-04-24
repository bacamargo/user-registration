import React from 'react'
import ReactDOM from 'react-dom'

// chamada dos componentes principais para a aplicação
import App from './app'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import GlobalStyle from './globalStyle.js'

ReactDOM.render(<><GlobalStyle /><App /></>, document.getElementById('root'))
