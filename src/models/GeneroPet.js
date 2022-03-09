const { Model, DataTypes } = require('sequelize')

class Tbgeneropet extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING(9)
        },
        {sequelize})//conexao com o banco de dados
    }
}

module.exports = Tbgeneropet