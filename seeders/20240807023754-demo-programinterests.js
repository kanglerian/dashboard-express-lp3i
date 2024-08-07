'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProgramInterests', [{
      programId: 1,
      name: 'Digital Marketing',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 1,
      name: 'Marketing Administration',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 2,
      name: 'Manajemen Keuangan',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 2,
      name: 'Manajemen Perbankan',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 3,
      name: 'Informatika Komputer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 4,
      name: 'Administrasi Bisnis',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 4,
      name: 'Administrasi Perkantoran',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 5,
      name: 'Teknik Kendaraan Ringan',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 5,
      name: 'Teknik Sepeda Motor',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 6,
      name: 'Akuntansi',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 7,
      name: 'Office Management',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 8,
      name: 'Bisnis Digital',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 9,
      name: 'Digital Marketing',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 9,
      name: 'Marketing Administration',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 10,
      name: 'Administrasi Bisnis',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 10,
      name: 'Administrasi Perkantoran',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 11,
      name: 'Manajemen Keuangan',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 11,
      name: 'Manajemen Perbankan',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      programId: 12,
      name: 'Informatika Komputer',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProgramInterests', null, {});
  }
};
