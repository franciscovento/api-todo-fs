const { DataTypes } = require('sequelize');
const { dataBase } = require("../utils/database")

// Define TODO mode
const Todo = dataBase.define('todos', {
  // Define attributes
  id: {
    // Define datatypes
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

// Export model

module.exports = { Todo }