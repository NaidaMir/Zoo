'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate(models) {
    }
  }
  Animal.init({
    photo1: DataTypes.TEXT,
    photo2: DataTypes.TEXT,
    photo3: DataTypes.TEXT,
    photo4: DataTypes.TEXT,
    photo5: DataTypes.TEXT,
    photo6: DataTypes.TEXT,
    name: DataTypes.TEXT,
    body: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};