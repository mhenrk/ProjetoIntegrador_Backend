const db = require("../models")

module.exports = {
    async store(req,res) {
        const { situacao } = req.body

        const castracaoPet = await db.Castracao.create({ situacao })

        return res.status(200).json(castracaoPet)
    },

    async index(req,res){
        try {
            const petsCastrados = await db.Castracao.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(petsCastrados)
        } catch (error) {
            return res.status(404).json(null)
        }
    },

    async show(req,res){
        try {
            const showPetCastrado = await db.Castracao.findByPk(req.params.id, {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(showPetCastrado)
        } catch (error) {
            return res.status(404).json(null)
        }
    },

    async update(req, res) {
        try {
            if (!req.params.id) {
                res.status(404).json({
                    errors: ['Id não enviado']
                })
            }

            const castracaoPk = await db.Castracao.findByPk(req.params.id)

            if (!castracaoPk) {
                return res.status(400).json({
                    errors: ['Genero não encontrado']
                })
            }

            const castracaoUpdate = await Castracao.update(req.body)

            return res.json(castracaoUpdate)
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

            const castracaoPk = await db.Castracao.findByPk(req.params.id)

            if (!castracaoPk) {
                return res.status(400).json({
                    errors: ['Castração não cadastrado ou não encontrado']
                })
            }

            await castracaoPk.destroy()

            return res.json(castracaoPk)
        } catch (error) {
            res.status(400).json({
                    errors: e.errors.map((err) => err.message)
                }
            )
        }
    }
}