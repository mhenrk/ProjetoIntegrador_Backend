const jwt = require('jsonwebtoken')
const db = require('../models')

module.exports = {

    async requestLogin(req, res, next) {
      
        const { authorization } = req.headers

        if (!authorization) {
            return res.status(401).json({
                errors: ['Usuário não logado']
            })
        }

        const [, token] = authorization.split(' ')

        try {
            const dados = jwt.verify(token, process.env.TOKEN_SECRET)

            const { id, email } = dados

            const user = await db.Usuario.findOne({
                where: {
                    id,
                    email
                }
            });

            if (!user) {
                return res.status(401).json({
                    errors: ['Usuário inválido'],
                })
            }

            req.id = id
            req.email = email

            return next()

        } catch (e) {
            return res.status(404).json({
                errors: ['Token Expirado ou Invalido']
            })
        }
    }
}