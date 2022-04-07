const db = require("../models")

module.exports = {
    async store(req,res) {
        const { nome } = req.body
        const racaPet = await db.Raca.create({ nome })

        return res.status(200).json(racaPet)
    },

    async index(req,res){
        try {
            const petRaca = await db.Raca.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(petRaca)
        } catch (error) {
            return res.status(404).json(null)
        }
    },

    async show(req,res){
        try {
            const showRaca = await db.Raca.findByPk(req.params.id,{
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(showRaca)
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

            const idRaca = await db.Raca.findByPk(req.params.id)

            if (!idRaca) {
                return res.status(400).json({
                    errors: ['Registro não encontrado']
                })
            }

            const racaUpdate = await idRaca.update(req.body)

            return res.json(racaUpdate)
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

            const idRaca = await db.Raca.findByPk(req.params.id)

            if (!idRaca) {
                return res.status(400).json({
                    errors: ['Registro não encontrado']
                })
            }

            await idRaca.destroy()

            return res.json(idRaca)
        } catch (error) {
            res.status(500).json({
                    errors: ['Erro Inexperado: ' + error]
                }
            )
        }
    }
}