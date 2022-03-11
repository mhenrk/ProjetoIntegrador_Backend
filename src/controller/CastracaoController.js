const CastracaoPet = require("../models/CastracaoPet")

module.exports = {
    async store(req,res) {
        const { situacao } = req.body

        const castracaoPet = await CastracaoPet.create({ situacao })

        return res.json(castracaoPet)
    },

    async index(req,res){
        try {
            const petsCastrados = await CastracaoPet.findAll()
            return res.json(petsCastrados)
        } catch (error) {
            return res.json(null)
        }
    },

    async show(req,res){
        try {
            const showPetCastrado = await CastracaoPet.findByPk(req.params.id)
            return res.json(showPetCastrado)
        } catch (error) {
            return res.json(null)
        }
    }
}