var redisClient = require('../lib/redis');

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

exports.add = function(food, canEat, cb) {
  redisClient.hset('foods', food, canEat, function(err, status) {
    if (err) throw err;
    console.log('hset', status);
    cb(null, status);
  });
};