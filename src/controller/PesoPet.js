const PesoPet = require("../models/PesoPet")

module.exports = {
    async store(req,res) {
        const { nome } = req.body

        const pesoPet = await GeneroPet.create({ nome })

        return res.json(pesoPet)
    }
}