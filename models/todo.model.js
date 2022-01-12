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
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  userID:{
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  status: {
    type: DataTypes.STRING(15),
    allowNull: false,
    defaultValue: 'pending'
  },
})

// Export model

module.exports = { Todo }