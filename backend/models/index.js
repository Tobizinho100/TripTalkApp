const Sequelize = require('sequelize');
const path = require('path');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database.sqlite'),
});

const User = require('./user')(sequelize, Sequelize.DataTypes);

const db = {
  sequelize,
  Sequelize,
  User,
};

module.exports = db;
