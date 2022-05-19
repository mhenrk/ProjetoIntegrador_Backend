'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('servico', 
    [
      {
        nome: 'BANHO',
        tempo: '60',
        preco: 40.00,
        parceiro_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'TOSA',
        tempo: '60',
        preco: 30.00,
        parceiro_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'VACINAÇÃO',
        tempo: '60',
        preco: 20.00,
        parceiro_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'DOGWALK',
        tempo: '60',
        preco: 30.00,
        parceiro_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      
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
