var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var redisClient = require('../lib/redis');


router.route('/')
  .get(function(req, res) {
    redisClient.hgetall('foods', function(error, foodObjects) {
      if (error) throw error;
      // Coerce string values to boolean.
      for (var food in foodObjects) {
        if (foodObjects.hasOwnProperty(food)) {
          foodObjects[food] = (foodObjects[food] === "true");
        }
      }
      res.json(foodObjects);
    });
  })
  .post(bodyParser.urlencoded({ extended: false  }), function(req, res) {
    var newFood = req.body;
    if (!newFood.name || !newFood.eat) {
      res.sendStatus(400);
      return;
    }
    redisClient.hset('foods', newFood.name, newFood.eat);
    res.status(201).json(newFood.name);
    });

router.route('/:name')
  .delete(function(req, res) {
    redisClient.hdel('foods', req.params.name, function(error) {
      if (error) throw error;
      res.sendStatus(204);
    });
  })
  .get(function(req, res) {
    redisClient.hget('foods', req.params.name, function(error, description) {
      res.json(description);
    });
  });

module.exports = router;
