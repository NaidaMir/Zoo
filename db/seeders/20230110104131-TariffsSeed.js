'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tariffs', [
      {

      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tariffs', null, {});
  }
};
