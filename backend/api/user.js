const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    // função para criptografar a senha do usuário
    const encryptPassword = password => { 
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    // função para salvar o usuário no banco de dados a partir dos parâmetros passados, como nome, email e senha e tratar erros para campos não preenchidos ou inválidos
    const save = async (req, res) => {
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id

        // validar que o usuário criado na variável user não seja admin
        if(!req.originalUrl.startsWith('/users')) user.admin = false

        // validar que o usuário criado na requisição não é admin
        if(!req.user || !req.user.admin) user.admin = false

        try {
            existsOrError(user.name, 'Name not informed')
            existsOrError(user.email, 'E-mail not informed')
            existsOrError(user.password, 'Password not informed')
            existsOrError(user.confirmPassword, 'Invalid password confirmation')
            equalsOrError(user.password, user.confirmPassword, 'Passwords do not match')

            // checagem caso o usuário já esteja cadastrado no banco
            const userFromDb = await app.db('users')
                .where( { email: user.email }).first()
            if(!user.id) {
                notExistsOrError(userFromDb, 'User already registered')
            }
        } catch(msg) {
            return res.status(400).send(msg)
        }

        // criptografia de senha e deleção da confirmação de senha, que não vai aparecer na requisição e no banco
        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        // uptade de usuário
        if(user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .whereNull('deletedAt')
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    // busca de usuários
    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    // busca de usuários por id
    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .where({ id: req.params.id })
            .whereNull('deletedAt')
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    // soft delete de usuário
    const remove = async (req, res) => {
        try{
            const rowsUpdated = await app.db('users')
                .update({ deletedAt: new Date() })
                .where({ id: req.params.id })
            existsOrError(rowsUpdated, 'User was not found')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }
    
    return { save, get, getById, remove }
}