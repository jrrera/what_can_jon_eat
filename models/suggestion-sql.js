var Sequelize = require('sequelize');
var sequelize = require('../lib/sequelize-instance');

var Suggestion = sequelize.define('Suggestion', {
  name: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = Suggestion;
