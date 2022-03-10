const { Model, DataTypes } = require('sequelize')

class Tb_cadastrapet extends Model {
    static init(sequelize) {
        super.init({
            nome_pet: DataTypes.STRING(20),
            apelido_pet: DataTypes.STRING(20),
            raca_pet_id: DataTypes.INTEGER,
            tipo_pet_id: DataTypes.INTEGER,
            datanasc_pet: DataTypes.STRING(10),
            idade_pet: DataTypes.INTEGER,
            genero_pet_id: DataTypes.INTEGER,
            pet_castrado_id: DataTypes.INTEGER,
            peso_pet_id: DataTypes.INTEGER
        },
        {
            sequelize,              //conexao com o banco de dados
            freezeTableName: true   //trava o nome da tabela
        })
    }
}

module.exports = Tb_cadastrapet