'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Program extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Program.hasMany(models.ProgramInterest, {
        foreignKey: 'programId',
        as: 'interests'
      });
    }
  }
  Program.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
    },
    code: DataTypes.STRING,
    title: DataTypes.STRING,
    campus: DataTypes.STRING,
    level: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.CHAR,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Program',
  });
  return Program;
};