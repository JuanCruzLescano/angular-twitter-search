require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

// Import models
const history = require('./models/history')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false
  }
);

const History = history(sequelize, DataTypes);

module.exports = {
  History,
  conn: sequelize
}