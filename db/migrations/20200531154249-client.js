'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('client', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destinataire: {
        type: Sequelize.TEXT
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      ville:{
        allowNull:false,
        type:Sequelize.TEXT,
      },
      telephone:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      adresse:{
        allowNull:false,
        type:Sequelize.TEXT
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   queryInterface.dropTable('client')
  }
};
