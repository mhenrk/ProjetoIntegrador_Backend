const PesoPet = require("../models/PesoPet")

module.exports = {
    async store(req,res) {
        const { nome } = req.body

        const pesoPet = await PesoPet.create({ nome })

        return res.json(pesoPet)
    },

    async index(req,res){
        try {
            const petPeso = await PesoPet.findAll()
            return res.json(petPeso)
        } catch (error) {
            return res.json(null)
        }
    },

    async show(req,res){
        try {
            const showPeso = await PesoPet.findByPk(req.params.id)
            return res.json(showPeso)
        } catch (error) {
            return res.json(null)
        }
    }
}