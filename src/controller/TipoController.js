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
            return res.status(200).json({petTipo})
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
            return res.status(200).json({showTipo})
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

            const idTipo = await db.Tipo.findByPk(req.params.id)

            if (!idTipo) {
                return res.status(400).json({
                    errors: ['Registro não encontrado']
                })
            }

            const tipoUpdate = await idTipo.update(req.body)

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

            const idTipo = await db.Tipo.findByPk(req.params.id)

            if (!idTipo) {
                return res.status(400).json({
                    errors: ['Registro não encontrado']
                })
            }

            await idTipo.destroy()

            return res.json(idTipo)
        } catch (error) {
            res.status(500).json({
                    errors: ['Erro Inexperado: ' + error]
                }
            )
        }
    }
}