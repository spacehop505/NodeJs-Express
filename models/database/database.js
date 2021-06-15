const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-work', 'root', 'admin', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;