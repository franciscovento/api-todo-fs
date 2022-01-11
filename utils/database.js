const { Sequelize } = require('sequelize');


const dataBase = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  port: process.env.DB_PORT,
  logging: false
});

module.exports = { dataBase };
