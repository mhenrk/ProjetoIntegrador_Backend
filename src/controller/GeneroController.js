const db = require("../models")

module.exports = {
    async store(req,res) {
        const { nome } = req.body

        const generoPet = await db.Genero.create({ nome })

        return res.status(200).json(generoPet)
    },

    async index(req,res){
        try {
            const petGenero = await db.Genero.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(petGenero)
        } catch (error) {
            return res.status(404).json(null)
        }
    },

    async show(req,res){
        try {
            const showGenero = await db.Genero.findByPk(req.params.id, {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(showGenero)
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

            const generoPk = await db.Genero.findByPk(req.params.id)

            if (!generoPk) {
                return res.status(400).json({
                    errors: ['Genero não encontrado']
                })
            }

            const generoUpdate = await Genero.update(req.body)

            return res.json(generoUpdate)
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

            const generoPk = await db.Genero.findByPk(req.params.id)

            if (!generoPk) {
                return res.status(400).json({
                    errors: ['Genero não cadastrado ou não encontrado']
                })
            }

            await generoPk.destroy()

            return res.json(generoPk)
        } catch (error) {
            res.status(400).json({
                    errors: e.errors.map((err) => err.message)
                }
            )
        }
    }
}