'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`    
      CREATE TABLE task(
          id integer PRIMARY KEY AUTO_INCREMENT,
          title VARCHAR(255) NOT NULL,
          description VARCHAR(1000) NOT NULL,
          type VARCHAR(255) NOT NULL,
          status VARCHAR(255) NOT NULL
      );
    `);
  }
};