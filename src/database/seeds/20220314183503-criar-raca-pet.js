'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tb_racapet', 
    [
      {
        nome: 'POODLE',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'PITBULL',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'PINTCHER',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'VIRA-LATA',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'BEAGLE',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'TERRIER',
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
