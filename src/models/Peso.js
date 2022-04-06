module.exports = (sequelize, DataTypes) => {
    const Peso = sequelize.define("Peso",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(9)
            }
        },
        {
            tableName: 'peso'
        }
    )
    
    Peso.associate = (models) => {
        Peso.hasMany(models.Pet, {
            as: 'pet',
            foreignKey: 'peso_pet_id'
        })
    }

    return Peso
}