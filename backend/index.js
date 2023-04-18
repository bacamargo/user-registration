const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

// modulo para ajudar a relacionar as dependencias entre os arquivos de forma mais otimizada
consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () =>
console.log('Backend running..'))
