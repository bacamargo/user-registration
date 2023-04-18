const config = require('../knexfile.js')
const knex = require('knex')(config)

// conectando o banco de dados do postgresql utilizando a ferramenta knex
module.exports = knex