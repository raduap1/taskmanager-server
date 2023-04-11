'use strict';
const { sequelize } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await sequelize.transaction(async () => {
      await queryInterface.bulkInsert('task', [{
        title: 'Task nr 1',
        description: 'The description of task 1',
        type: 'STORY',
        status: 'TODO'
      }, {
        title: 'Task nr 2',
        description: 'The description of task 2',
        type: 'STORY',
        status: 'INPROGRESS'
      }, {
        title: 'Task nr 3',
        description: 'The description of task 3',
        type: 'DEFECT',
        status: 'TESTABLE'
      }, {
        title: 'Task nr 4',
        description: 'The description of task 4',
        type: 'STORY',
        status: 'DONE'
      }, {
        title: 'Task nr 5',
        description: 'The description of task 5',
        type: 'STORY',
        status: 'INPROGRESS'
      }, {
        title: 'Task nr 6',
        description: 'The description of task 6',
        type: 'DEFECT',
        status: 'TESTABLE'
      }, {
        title: 'Task nr 7',
        description: 'The description of task 7',
        type: 'STORY',
        status: 'DONE'
      }, {
        title: 'Task nr 8',
        description: 'The description of task 8',
        type: 'STORY',
        status: 'INPROGRESS'
      }, {
        title: 'Task nr 9',
        description: 'The description of task 9',
        type: 'DEFECT',
        status: 'TESTABLE'
      }, {
        title: 'Task nr 10',
        description: 'The description of task 10',
        type: 'STORY',
        status: 'DONE'
      }, {
        title: 'Task nr 11',
        description: 'The description of task 11',
        type: 'STORY',
        status: 'INPROGRESS'
      }, {
        title: 'Task nr 12',
        description: 'The description of task 12',
        type: 'DEFECT',
        status: 'TESTABLE'
      }, {
        title: 'Task nr 13',
        description: 'The description of task 13',
        type: 'STORY',
        status: 'DONE'
      }, {
        title: 'Task nr 14',
        description: 'The description of task 14',
        type: 'STORY',
        status: 'DONE'
      }])
    })
  }
};
