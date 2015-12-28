var Food = require('./food-sql');
var Suggestion = require('./suggestion-sql');

// Relationships
Food.hasMany(Suggestion);

Food.sync({force: true}).then(function () {
  Suggestion.sync({force: true}).then(function () {

    // Table created
    Food.create({
      name: 'pear',
      canEat: true
    });

    Food.create({
      name: 'jalapeno',
      canEat: false
    })
    .then(function(food) {
      Suggestion.create({ name: 'horseradish' })
          .then(function(suggestion) { food.setSuggestions([ suggestion ]); }
      );
    });
  });
});

exports.Food = Food;
exports.Suggestion = Suggestion;
