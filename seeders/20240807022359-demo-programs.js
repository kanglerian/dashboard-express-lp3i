'use strict';
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Programs', [{
      uuid: uuidv4(),
      code: 'MP24',
      title: 'Manajemen Pemasaran',
      campus: 'Kampus Tasikmalaya',
      level: 'D3',
      type: 'R',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      uuid: uuidv4(),
      code: 'MKP24',
      title: 'Manajemen Keuangan Perbankan',
      campus: 'Kampus Tasikmalaya',
      level: 'D3',
      type: 'R',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      uuid: uuidv4(),
      code: 'MI24',
      title: 'Manajemen Informatika',
      campus: 'Kampus Utama',
      level: 'D3',
      type: 'R',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      uuid: uuidv4(),
      code: 'AB24',
      title: 'Administrasi Bisnis',
      campus: 'Kampus Utama',
      level: 'D3',
      type: 'R',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      uuid: uuidv4(),
      code: 'TO24L',
      title: 'Teknik Otomotif',
      campus: 'LP3I Tasikmalaya',
      level: 'Vokasi 2 Tahun',
      type: 'R',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      uuid: uuidv4(),
      code: 'AK24L',
      title: 'Akuntansi',
      campus: 'LP3I Tasikmalaya',
      level: 'Vokasi 2 Tahun',
      type: 'R',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      uuid: uuidv4(),
      code: 'OM24L',
      title: 'Office Management',
      campus: 'LP3I Tasikmalaya',
      level: 'Vokasi 2 Tahun',
      type: 'R',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      uuid: uuidv4(),
      code: 'BD24',
      title: 'Bisnis Digital',
      campus: 'Kampus Utama',
      level: 'S1',
      type: 'N',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      uuid: uuidv4(),
      code: 'MPNR24',
      title: 'Manajemen Pemasaran (Karyawan)',
      campus: 'Kampus Tasikmalaya',
      level: 'D3',
      type: 'N',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      uuid: uuidv4(),
      code: 'ABNR24',
      title: 'Administrasi Bisnis (Karyawan)',
      campus: 'Kampus Utama',
      level: 'D3',
      type: 'N',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      uuid: uuidv4(),
      code: 'MKPNR24',
      title: 'Manajemen Keuangan dan Perbankan (Karyawan)',
      campus: 'Kampus Tasikmalaya',
      level: 'D3',
      type: 'N',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      uuid: uuidv4(),
      code: 'MINR24',
      title: 'Manajemen Informatika (Karyawan)',
      campus: 'Kampus Utama',
      level: 'D3',
      type: 'N',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Programs', null, {});
  }
};
