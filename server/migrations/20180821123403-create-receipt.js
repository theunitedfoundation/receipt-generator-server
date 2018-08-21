'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Receipts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      donor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      receiver: {
        type: Sequelize.STRING,
        allowNull: false
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      email_id: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isEmail: true
        }
      },
      mobile: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isNumberic: true,
          len: 10
        }
      },
      purpose: {
        type: Sequelize.STRING,
        allowNull: false
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
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('Receipts'),
};