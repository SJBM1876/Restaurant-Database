const {sequelize} = require('../db');
const { DataTypes } = require('sequelize');

// TODO - create a Restaurant model
// Define the Restaurant model
const Restaurant = sequelize.define('Restaurant', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cuisine: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

module.exports = {Restaurant};