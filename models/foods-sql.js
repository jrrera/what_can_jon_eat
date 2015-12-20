var Sequelize = require('sequelize');
var sequelize = require('../lib/postgres');

var Food = sequelize.define('food', {
  name: {
    type: Sequelize.STRING,
  },
  canEat: {
    type: Sequelize.BOOLEAN
  }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

Food.sync({force: true}).then(function () {
  console.log('Food table synced.');
  // Table created
  return Food.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

module.exports = Food;
