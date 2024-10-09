const {sequelize} = require('../db');
const { DataTypes } = require('sequelize');

// TODO - create a Menu model
const Menu = sequelize.define('Menu', {
    // Model attribute is defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

module.exports = {Menu};