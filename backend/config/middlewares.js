const bodyParser = require('body-parser')
const cors = require('cors')

// interpretação do body da requisição com body-parser e utilizando o cors para acessar a api através de outra aplicação (frontend)
module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}