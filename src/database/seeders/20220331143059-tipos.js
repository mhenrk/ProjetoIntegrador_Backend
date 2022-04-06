'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipo', 
    [
      {
        nome: 'PEIXE',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'CAVALO',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'RAMSTER',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'PASSARO',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'CACHORRO',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'GATO',
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
