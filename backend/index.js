const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(5000, () =>
console.log('Backend running..'))