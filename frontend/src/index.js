import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import GlobalStyle from './GlobalStyle'

ReactDOM.render(<><GlobalStyle /><App /></>, document.getElementById('root'))
