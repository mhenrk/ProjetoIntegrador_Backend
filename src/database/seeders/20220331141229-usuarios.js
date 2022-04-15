'use strict';

const bcryptojs = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuario', 
    [
      {
        nome: 'Marcio',
        email: 'a.h@dhpetshop.com',  //unique
        password: await bcryptojs.hash('123456789', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Victor',
        email: 'victor.c@dhpetshop.com',  //unique
        password: await bcryptojs.hash('123456789', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Guilherme',
        email: 'guilherme.c@dhpetshop.com',  //unique
        password: await bcryptojs.hash('123456789', 8),
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
