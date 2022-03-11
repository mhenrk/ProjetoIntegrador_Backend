const TipoPet = require("../models/TipoPet")

module.exports = {
    async store(req,res) {
        const { nome } = req.body

        const tipoPet = await TipoPet.create({ nome })

        return res.json(tipoPet)
    },

    async index(req,res){
        try {
            const petTipo = await TipoPet.findAll()
            return res.json(petTipo)
        } catch (error) {
            return res.json(null)
        }
    },

    async show(req,res){
        try {
            const showTipo = await TipoPet.findByPk(req.params.id)
            return res.json(showTipo)
        } catch (error) {
            return res.json(null)
        }
    }
}