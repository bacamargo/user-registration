module.exports = app => {
    // função que checa se o valor passado existe e, caso não exista, retorna um erro
    function existsOrError(value, msg) {
        if(!value) throw msg
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    }

    // função que checa se o valor passado não existe e, caso exista retorna um erro
    function notExistsOrError(value, msg) {
        try {
            existsOrError(value, msg)
        } catch(msg) {
            return
        }
        throw msg
    }

    // função que checa se os valores passados são iguais e, caso não sejam, retorna um erro
    function equalsOrError(valueA, valueB, msg) {
        if(valueA !== valueB) throw msg
    }

    return { existsOrError, notExistsOrError, equalsOrError }
}