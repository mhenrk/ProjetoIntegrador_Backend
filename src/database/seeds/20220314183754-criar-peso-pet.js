'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tb_pesopet', 
    [
      {
        nome: 'ATÉ 1KG',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: '1KG - 2KG',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: '2KG - 3KG',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: '+3KG',
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
