'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tariff extends Model {
    static associate(models) {
    }
  }
  Tariff.init({
    visitor: DataTypes.TEXT,
    dayOfTheWeek: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tariff',
  });
  return Tariff;
};