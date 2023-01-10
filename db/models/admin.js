'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {
    }
  }
  Admin.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};