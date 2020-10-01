'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pictures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { 
          model: "Users",
          key: 'id' 
        }
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      body: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      tags: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      urlRef: {
        allowNull: false,
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pictures');
  }
};