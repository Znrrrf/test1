'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('user_bio', {
      fields: ['user_login_id'],
      type: 'foreign key',
      name: 'user_bio_user_login_id_fk',
      references: {
        table: 'user_login',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.removeConstraint('user_bio', 'user_bio_user_login_id_fk');

  }
};
