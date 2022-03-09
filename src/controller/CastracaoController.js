const CastracaoPet = require("../models/CastracaoPet")

module.exports = {
    async store(req,res) {
        const { situacao } = req.body

        const castracaoPet = await CastracaoPet.create({ situacao })

        return res.json(castracaoPet)
    }
}