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
      name: 'beef',
      canEat: true
    });

    Food.create({
      name: 'kale',
      canEat: true
    });

    Food.create({
      name: 'tomatoes',
      canEat: false
    });

    Food.create({
      name: 'almonds',
      canEat: false
    });

    Food.create({
      name: 'onions',
      canEat: true
    });
    Food.create({
      name: 'garlic',
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
