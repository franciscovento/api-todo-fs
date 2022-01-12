const { DataTypes } = require('sequelize')
const { dataBase } = require('../utils/database');

const User = dataBase.define('users', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(15),
    allowNull: false,
    defaultValue: 'available'
  }
},
{timestamps: false}
);

module.exports = { User };