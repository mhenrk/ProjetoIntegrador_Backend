module.exports = (sequelize, DataTypes) => {
    const Genero = sequelize.define("Genero",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(9),
                allowNull: false,
                defaultValue: ''
            }
        },
        {
            tableName: 'genero'
        }
    )
    
    Genero.associate = (models) => {
        Genero.hasMany(models.Pet, {
            as: 'pet',
            foreignKey: 'genero_pet_id'
        })
    }

    return Genero
}