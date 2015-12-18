var redisClient = require('../lib/redis');

/**
 * Retrieves the entire hash of foods.
 * @param {Function} cb
 */
exports.getAll = function(cb) {
  redisClient.hgetall('foods', function(err, foods) {
    if (err) throw err;

    // Coerce string values to boolean.
    for (var food in foods) {
      if (foods.hasOwnProperty(food)) {
        foods[food] = (foods[food] === "true");
      }
    }
    cb(null, foods);
  });
};


/**
 * Adds a new food to the hash.
 * @param {string} food
 * @param {boolean} canEat
 * @param {Function} cb
 */
exports.add = function(food, canEat, cb) {
  redisClient.hset('foods', food, canEat, function(err, status) {
    if (err) throw err;
    console.log('hset', status);
    cb(null, status);
  });
};
