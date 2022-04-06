const jwt = require('jsonwebtoken')
const db = require('../models')

module.exports = {

    async requestLogin (req, res, next) {
        //apos ter feito login é gerado o token jwt
        //capturo o token passado no "headers"
        const { authorization } = req.headers

        //valido se o token é null/undefined
        if (!authorization) {
            return res.status(401).json({
                errors: ['Usuário não logado']
            })
        }

        //quebro (split) o header em 2 partes
        /*
            insomnia guia header funciona com par de chave/valor
            header: authorization
            value: Bearer <token>
        */
        const [, token] = authorization.split(' ')

        /**
         * Bearer é a identificação e não precisa ser utilizado
         * token recebe o valor do token gerado quando é feito o login
         */

        try {
            //validação do token valido atraves do token_secret - .env
            const dados = jwt.verify(token, process.env.TOKEN_SECRET)

            //se o token foi validado, consigo os dados, que é um objeto, contendo os campos do meu usuario
            const { id, email } = dados

            //pesquiso na base de dados se existe esse usuario com id/email
            const user = await db.Usuario.findOne({
                where: {
                  id,
                  email,
                },
              });

              //se não tenho usuário já é feito o bloqueio
              if (!user) {
                return res.status(401).json({
                  errors: ['Usuário inválido'],
                });
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