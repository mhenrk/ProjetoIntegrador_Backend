const { Model, DataTypes } = require('sequelize')

class Tb_tipopet extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING(9)
        },
        {
            sequelize,              //conexao com o banco de dados
            freezeTableName: true   //trava o nome da tabela
        })
    }
}

module.exports = Tb_tipopet