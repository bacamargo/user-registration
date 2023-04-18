const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    // funcao de checagem caso não seja preenchido o email ou a senha
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send('Please, inform user and password')
        }

        // caso o email esteja sendo preenchido, obteremos o usuário no banco de dados
        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        // caso o usuario não exista, apontar que o usuário não foi encontrado
        if (!user) {
            return res.status(400).send('User not found')
        }

        // comparar a senha recebida com a senha do usuario e, se não for, retornar erro
        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) { 
            return res.status(401).send('Invalid user/password')
        }

        // utilizar a data atual para determinar o tempo de validade do token
        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        // geração do token jwt 
        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    // validação do token gerado
    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {
            // problema com o token
        }

        res.send(false)
    }

    return { signin, validateToken }
}