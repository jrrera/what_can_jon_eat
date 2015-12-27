var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize-instance');

var Food = sequelize.define('Food', {
  name: {
    type: Sequelize.STRING,
  },
  canEat: {
    type: Sequelize.BOOLEAN
  }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = Food;
