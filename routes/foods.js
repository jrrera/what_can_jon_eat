var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var redisClient = require('../lib/redis');

var foodModel = require('../models/foods-sql');


router.route('/')
  .get(function(req, res) {
    foodModel.all().then(function(foods) {
      if (!foods) {
        res.sendStatus(204);
        return;
      }
      res.json(foods);
    });
  })
  .post(bodyParser.urlencoded({ extended: false  }), function(req, res) {
    var newFood = req.body;
    if (!newFood.name || !newFood.eat) {
      res.sendStatus(400);
      return;
    }
    //redisClient.hset('foods', newFood.name, newFood.eat);
    //res.status(201).json(newFood.name);
    foodModel.create({
      name: newFood.name,
      canEat: newFood.eat
    }).then(function(food) {
      console.log('food created!', food);
    })
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
