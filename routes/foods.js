var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var orm = require('../models/orm-sql');
var Food = orm.Food;
var Suggestion = orm.Suggestion;


router.route('/')
  .get(function(req, res) {
    Food.findAll({
      include: [{ model: Suggestion }]
    }).then(function(foods) {
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

    Food.create({
      name: newFood.name,
      canEat: newFood.eat
    }).then(function(food) {
      console.log('food created!', food);
    });
  });

router.route('/:name')
  .delete(function(req, res) {
    Food.find({
      where: { name: req.params.name }
    }).then(function(food) {
      food.destroy();
      res.sendStatus(204);
    });
  })
  .get(function(req, res) {
    Food.findAll({
      where: { name: req.params.name },
      include: [{ model: Suggestion }]
    }).then(function(foods) {
      console.log('food to get', foods);
      res.json(foods);
    });
  });

module.exports = router;
