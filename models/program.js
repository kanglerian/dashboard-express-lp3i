'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Program extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Program.init({
    uuid: {
      type: DataTypes.STRING(10),
      unique: true,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(10),
      unique: true,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    campus: {
      type: DataTypes.STRING(255),
      unique: false,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING(255),
      unique: false,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      unique: false,
      allowNull: false,
    },
    reguler: {
      type: DataTypes.BOOLEAN,
      unique: false,
      allowNull: false,
      defaultValue: true,
    },
    employee: {
      type: DataTypes.BOOLEAN,
      unique: false,
      allowNull: false,
      defaultValue: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      unique: false,
      allowNull: false,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      unique: false,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      unique: false,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    sequelize,
    modelName: 'Program',
    tableName: 'programs',
    freezeTableName: true,
  });
  return Program;
};