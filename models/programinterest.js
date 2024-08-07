'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class ProgramInterest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProgramInterest.belongsTo(models.Program, {
        foreignKey: 'programId',
        as: 'program'
      });
    }
  }
  ProgramInterest.init({
    programId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Programs',
        key: 'id'
      }
    },
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ProgramInterest',
  });
  return ProgramInterest;
};