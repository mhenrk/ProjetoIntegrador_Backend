const CadUser = require("../models/CadUser")

module.exports = {
    async store(req, res) {
        const {
            nome,
            sobrenome,
            email,
            cpf,
            datanasc,
            password,
            telefone,
            cep,
            rua,
            numero,
            bairro,
            cidade,
            estado,
            pet_id
        } = req.body

        try {
            //faço teste para tentar criar um novo usuário, caso não consiga, ele me mostra o erro informado na chave message do objeto errors
            const cadUser = await CadUser.create({
                nome,
                sobrenome,
                email,
                cpf,
                datanasc,
                password,
                telefone,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                estado,
                pet_id
            })

            return res.json(cadUser)
        } catch (e) {
            console.log(e)
            return res.status(400).json(
                {
                    errors: e.errors.map((err) => err.message)
                    //mapeando todo conjunto de erros que podem aparecer na aplicação
                }
            )
        }
    },

    //Index
    async index(req, res){
        try {
            const usuarios = await CadUser.findAll()
            return res.json(usuarios)
        } catch (error) {
            return res.json(null)
        }
    },

    //show
    async show(req,res){
        try {
            const showUser = await CadUser.findByPk(req.params.id)
            return res.json(showUser)
        } catch (error) {
            return res.json(null)
        }
    },

    async update(req, res) {
        try {
            const userID = await CadUser.findByPk(req.params.id)

            if (!userID) {
                return res.status(400).json({
                    errors: ['Usuário não encontrado']
                })
            }

            const updatedUser = await userID.update(req.body)

            return res.json(updatedUser)
        } catch (error) {
            res.status(400).json(
                {
                    errors: e.errors.map((err) => err.message)
                }
            )
        }
    },

    async delete(req, res) {
        try {
            if (!req.params.id) {
                return res.status(400).json({
                    errors: ['Id não enviado']
                })
            }

            const userID = await CadUser.findByPk(req.params.id)

            if (!userID) {
                return res.status(400).json({
                    errors: ['Usuário não encontrado']
                })
            }

            await userID.destroy()

            return res.json(userID)
        } catch (error) {
            res.status(400).json(
                {
                    errors: e.errors.map((err) => err.message)
                }
            )
        }
    }

    //Show
    //Update
    //Delete
    
}

