module.exports = (sequelize, DataTypes) => {
    const Servico = sequelize.define("Servico",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(30),
            },
            tempo: {
                type: DataTypes.STRING(3),
            },
            preco: {
                type: DataTypes.FLOAT
            }
        },
        {
            tableName: 'servico'
        }
    )

    Servico.associate = (models) => {
        Servico.belongsTo(models.Parceiro, {
            as: 'parceiro',
            foreignKey: 'parceiro_id'
        })
    }
    
    return Servico
}