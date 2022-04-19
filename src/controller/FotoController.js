const multer = require('multer')
const multerConfig = require('../config/multer')
const db = require('../models')

const uploadFoto = multer(multerConfig).single('foto')

module.exports = {

    store(req, res) {
        return uploadFoto(req, res, async (error) => {
            if (error) {
                return res.status(400).json({
                    errors: [error.code]
                });
            }

            try {
                const { originalname, filename } = req.file
                const usuario_id  = req.body.usuario_id

                const insert = {
                    originalname: originalname,
                    filename: filename,
                    usuario_id: usuario_id
                }
                
                db.Foto.create(insert)
                .then(foto => {
                    res.status(201).send({
                        message: "Foto Cadastrada"
                    })
                })
                .catch(e => {
                    console.log(e)
                    res.status(500).send({
                        message: "Erro de conexão com a base de dados"
                    })
                })
                
            } catch (e) {
                console.log(e.message)
                return res.status(400).json({
                    errors: ['Usuário não existe']
                })
            }
        })
    }

}