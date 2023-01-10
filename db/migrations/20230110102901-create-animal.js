'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      photo1: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      photo2: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      photo3: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      photo4: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      photo5: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      photo6: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      body: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Animals');
  }
};