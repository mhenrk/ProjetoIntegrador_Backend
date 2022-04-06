module.exports = (sequelize, DataTypes) => {
    const Castracao = sequelize.define("Castracao",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            situacao: {
                type: DataTypes.STRING(3)
            }
        },
        {
            tableName: 'castracao'
        }
    )

    Castracao.associate = (models) => {
        Castracao.hasMany(models.Pet, {
            as: 'pet',
            foreignKey: 'pet_castrado_id'
        })
    }
    
    return Castracao
}