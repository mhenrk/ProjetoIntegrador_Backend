const db = require("../models")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

module.exports = {

    async store(req, res) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                return res.status(401).json({
                    errors: ['Credenciais Inválidas']
                })
            }

            const user = await db.Usuario.findOne({
                where: { email },
                raw: true
            })
            
            if (!user || user == null) {
                return res.status(401).json({
                    errors: ['Usuario não cadastrado']
                })
            }
            const { id: user_id, email: user_email, nome, is_admin } = user

            const validaPassword = bcrypt.compareSync(password, user.password)

            if (!validaPassword) {
                return res.status(401).json({
                    errors: ['Senha Inválida']
                })
            }

            const { id } = user
            const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
                expiresIn: process.env.TOKEN_EXPIRATION
            })

            return res.status(200).send({
                message: 'Usuário Logado',
                id: user_id,
                email: user_email,
                nome,
                is_admin,
                token
            })
        } catch (e) {
            return res.json("Ocorreu um erro: " + e.message)
        }
    }

}

/**
* TOKEN_EXPIRATION possui um padrão em segundos,
* portanto tentar converter o tempo de expiração 
* do token para segundos no arquivo .env
* ou nos seguintes modelos: 7d | 2 days | 10h
*/