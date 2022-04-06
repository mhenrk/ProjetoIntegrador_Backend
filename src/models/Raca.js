module.exports = (sequelize, DataTypes) => {
    const Raca = sequelize.define("Raca",
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
            tableName: 'raca'
        }
    )
    
    Raca.associate = (models) => {
        Raca.hasMany(models.Pet, {
            as: 'pet',
            foreignKey: 'raca_pet_id'
        })
    }

    return Raca
}