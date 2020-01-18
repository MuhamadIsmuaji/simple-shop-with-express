const Sequelize = require('sequelize');

const DB = new Sequelize('complete-nodejs-guide', 'root', 'root', {
	dialect: 'mysql',
	host: 'localhost'
});

module.exports = DB;