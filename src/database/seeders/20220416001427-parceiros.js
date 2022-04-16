'use strict';

const bcryptojs = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('parceiro', 
    [
      {
        nome_fantasia: 'TDZ Comercio Eletronico LTDA',
        email: 'tdz@dhpetshop.com',  //unique
        password: await bcryptojs.hash('123456789', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome_fantasia: 'Panco Padaria Co.',
        email: 'panco.p@dhpetshop.com',  //unique
        password: await bcryptojs.hash('123456789', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome_fantasia: 'Churrascaria do Gaucho',
        email: 'dogaucho@dhpetshop.com',  //unique
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
