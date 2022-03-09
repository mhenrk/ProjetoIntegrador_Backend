const TipoPet = require("../models/TipoPet")

module.exports = {
    async store(req,res) {
        const { nome } = req.body

        const tipoPet = await TipoPet.create({ nome })

        return res.json(tipoPet)
    }
}