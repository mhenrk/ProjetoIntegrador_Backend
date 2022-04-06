module.exports = (sequelize, DataTypes) => {
    const Tipo = sequelize.define("Tipo",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(9),
            }
        },
        {
            tableName: 'tipo'
        }
    )

    Tipo.associate = (models) => {
        Tipo.hasMany(models.Pet, {
            as: 'pet',
            foreignKey: 'tipo_pet_id'
        })
    }
    
    return Tipo
}