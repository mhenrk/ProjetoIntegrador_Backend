const { Model, DataTypes } = require('sequelize')


const tipoPet = sequelize.define()


class Tbtipopet extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING(9)
        },
        {sequelize})//conexao com o banco de dados
    }
}

module.exports = Tbtipopet