var Food = require('./food-sql');
var Suggestion = require('./suggestion-sql');

// Relationships
Food.hasMany(Suggestion);

exports.Food = Food;
exports.Suggestion = Suggestion;
