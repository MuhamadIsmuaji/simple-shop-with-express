const Sequelize = require('sequelize');
const DB = require('../util/database');

const Product = DB.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncreement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;