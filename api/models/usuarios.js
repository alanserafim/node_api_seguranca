'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    static associate(models) {
    }
  }
  usuarios.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuarios',
    defaultScope: {
      attributes: {
        exclude: ['senha']
      }
    }
  });
  return usuarios;
};