const { Model, DataTypes } = require('sequelize')

class Tb_cadastrausuario extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING(10),
            sobrenome: DataTypes.STRING(40),
            email: DataTypes.STRING(100),
            cpf: DataTypes.STRING(11),
            datanasc: DataTypes.STRING(10),
            senha: DataTypes.STRING(20),
            telefone: DataTypes.STRING(11),
            cep: DataTypes.STRING(10),
            rua: DataTypes.STRING(50),
            numero: DataTypes.STRING(5),
            bairro: DataTypes.STRING(30),
            cidade: DataTypes.STRING(30),
            estado: DataTypes.STRING(2),
            pet_id: DataTypes.INTEGER
        },
        {
            sequelize,              //conexao com o banco de dados
            freezeTableName: true   //trava o nome da tabela
        })
    }
}

module.exports = Tb_cadastrausuario