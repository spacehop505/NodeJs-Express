const Sequalize = require('sequelize');
const sequelize = require('./connection-squelize');


const Fruit = sequelize.define('fruit_table', {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequalize.STRING,
  price: {
    type: Sequalize.DOUBLE,
    allowNull: false
  }
});

module.exports = Fruit;