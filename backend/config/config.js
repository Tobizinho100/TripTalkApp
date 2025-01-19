const path = require('path');
module.exports = {
  development: {
    storage: path.join(__dirname, '../database.sqlite'),
    dialect: 'sqlite'
  }
};