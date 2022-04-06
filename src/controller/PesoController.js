const db = require("../models")

module.exports = {
    async store(req, res) {
        const { nome } = req.body

        const pesoPet = await db.Peso.create({ nome })

        return res.status(200).json(pesoPet)
    },

    async index(req, res) {
        try {
            const petPeso = await db.Peso.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(petPeso)
        } catch (error) {
            return res.status(400).json(null)
        }
    },

    async show(req, res) {
        try {
            const showPeso = await db.Peso.findByPk(req.params.id, {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(showPeso)
        } catch (error) {
            return res.status(404).json(null)
        }
    },

    async update(req, res) {
        try {
            if (!req.params.id) {
                res.status(400).json({
                    errors: ['Id não enviado']
                })
            }

            const pesoPk = await db.Peso.findByPk(req.params.id)

            if (!pesoPk) {
                return res.status(400).json({
                    errors: ['Peso não encontrado']
                })
            }

            const pesoUpdate = await pesoPk.update(req.body)

            return res.json(pesoUpdate)
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

            const pesoPk = await db.Peso.findByPk(req.params.id)

            if (!pesoPk) {
                return res.status(400).json({
                    errors: ['Peso não cadastrado ou não encontrado']
                })
            }

            await pesoPk.destroy()

            return res.json(pesoPk)
        } catch (error) {
            res.status(400).json({
                    errors: e.errors.map((err) => err.message)
                }
            )
        }
    }
}