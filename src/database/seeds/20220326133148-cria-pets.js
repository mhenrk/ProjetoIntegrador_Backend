'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tb_cadastrapet', 
    [
      {
        nome_pet: 'Mick',
        apelido_pet: 'Destruidor',
        raca_pet_id: 2,
        tipo_pet_id: 5,              //unique
        datanasc_pet: '12/02/2022',          //01/01/1901
        idade_pet: 1,
        genero_pet_id: 1,    //unique
        pet_castrado_id: 2,
        peso_pet_id: 1,
        usuarioId: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
