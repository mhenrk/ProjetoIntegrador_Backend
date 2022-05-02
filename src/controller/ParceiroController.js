const db = require("../models")
const bcryptjs = require("bcryptjs")

module.exports = {
    async store(req, res) {
        const {
            nome_fantasia,
            email,
            password
        } = req.body

        const passwordHash = bcryptjs.hashSync(password, 8)

        try {
            
            const parceiroCreate = await db.Parceiro.create({
                nome_fantasia,
                email,
                password: passwordHash
            })
            return res.status(200).json({ nome_fantasia, email, passwordHash })
        } catch (error) {
            return res.status(404).json("Ocorreu um erro: " + error)
        }
    },

    async index(req, res) {
        try {
            const parceiros = await db.Parceiro.findAll({
                include: [
                    {
                        model: db.Servico,
                        as: 'servico',
                        attributes: {
                            exclude: ['parceiro_id', 'createdAt', 'updatedAt']
                        }
                    }],
                    attributes: {
                        exclude: [ 'password', 'cep', 'rua', 'numero', 'bairro', 'createdAt', 'updatedAt']
                    }
                })

            return res.status(200).json(parceiros)
        } catch (error) {
            return res.status(404).json("Ocorreu um erro: " + error.message)
        }
    },

    async show(req, res) {
        try {
            const parceiroId = await db.Parceiro.findByPk(req.params.id, {
                include: [
                    {
                        model: db.Servico,
                        as: 'servico',
                        attributes: {
                            exclude: ['parceiro_id', 'createdAt', 'updatedAt']
                        }
                    }],
                    attributes: {
                        exclude: [ 'password', 'cep', 'rua', 'numero', 'bairro', 'createdAt', 'updatedAt']
                    }
                })

            return res.status(200).json({ parceiroId })
        } catch (error) {
            return res.status(404).json("Ocorreu um erro: " + error.message)
        }
    },

    async update(req, res) {
        try {
            // const parceiroID = await db.Parceiro.findByPk(req.id) //usuario faz seu propio update
            const parceiroID = await db.Parceiro.findByPk(req.params.id) //passo por url o id do usuario

            if (!parceiroID) {
                return res.status(400).json({
                    errors: ['Parceiro não encontrado']
                })
            }

            const updatedParceiro = await parceiroID.update(req.body)

            return res.json(updatedParceiro)
        } catch (error) {
            return res.status(404).json("Ocorreu um erro: " + error.message)
        }
    },

    async delete(req, res) {
        try {
            // const parceiroID = await db.Parceiro.findByPk(req.id)
            console.log(req.params.id)
            const parceiroID = await db.Parceiro.findByPk(req.params.id)
            console.log(parceiroID)

            if (!parceiroID) {
                return res.status(400).json({
                    errors: ['Parceiro não encontrado']
                })
            }

            await parceiroID.destroy()

            return res.json({
                message: "Parceiro deletado"
            })
        } catch (error) {
            return res.status(404).json("Ocorreu um erro: " + error.message)
        }
    }
}

