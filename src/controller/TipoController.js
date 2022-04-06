const db = require('../models')

module.exports = {
    async store(req, res) {
        const { nome } = req.body

        const tipoPet = await db.Tipo.create({ nome })

        return res.status(200).json(tipoPet)
    },

    async index(req, res) {
        try {
            const petTipo = await db.Tipo.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(petTipo)
        } catch (error) {
            return res.status(404).json(null)
        }
    },

    async show(req, res) {
        try {
            const showTipo = await db.Tipo.findByPk(req.params.id,{
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(showTipo)
        } catch (error) {
            console.log(error)
            return res.status(400).json(null)
        }
    },

    async update(req, res) {
        try {
            if (!req.params.id) {
                res.status(400).json({
                    errors: ['Id não enviado']
                })
            }

            const tipoPet = await db.Tipo.findByPk(req.params.id)

            if (!tipoPet) {
                return res.status(400).json({
                    errors: ['Tipo não encontrado']
                })
            }

            const tipoUpdate = await tipoPet.update(req.body)

            return res.json(tipoUpdate)
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

            const tipoDelete = await db.Tipo.findByPk(req.params.id)

            if (!tipoDelete) {
                return res.status(400).json({
                    errors: ['Tipo não cadastrado ou não encontrado']
                })
            }

            await tipoDelete.destroy()

            return res.json(tipoDelete)
        } catch (error) {
            res.status(400).json(
                {
                    errors: e.errors.map((err) => err.message)
                }
            )
        }
    }
}