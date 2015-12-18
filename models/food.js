var redisClient = require('../lib/redis');

/**
 * Retrieves the entire hash of foods.
 * @return {Promise}
 */
exports.getAll = function() {
  return redisClient.hgetallAsync('foods').then(function(foods) {

    // Coerce string values to boolean.
    for (var food in foods) {
      if (foods.hasOwnProperty(food)) {
        foods[food] = (foods[food] === "true");
      }
    }
    return foods;
  });
};


/**
 * Adds a new food to the hash.
 * @param {string} food
 * @param {boolean} canEat
 * @return {Promise}
 */
exports.add = function(food, canEat) {
  return redisClient.hsetAsync('foods', food, canEat);
};


/**
 * Removes a new food to the hash.
 * @param {string} food
 * @return {Promise}
 */
exports.delete = function(food) {
  return redisClient.hdelAsync('foods', food);
};
