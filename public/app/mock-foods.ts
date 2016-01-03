import {FoodItem} from './food-item';

export var FOODS: FoodItem[] = [
  { id: 1, name: 'broccoli', canEat: true, Suggestions: [] },
  { id: 2, name: 'cheese', canEat: false, Suggestions: [ {id: 1, name: 'prosciutto'} ] },
  { id: 3, name: 'beef', canEat: true, Suggestions: [] },
];
