import {Component, OnInit, EventEmitter, Output} from 'angular2/core';

import {FoodItem} from './food-item';

@Component({
    selector: 'food-search',
    inputs: ['foods'],
    template: `
      <div class="search-prompt">Can Jon eat
        <input class="typeahead" type="text" placeholder="Enter a food"
               #foodSearch (keyup)="update(foodSearch.value)"/> ?
      </div>
    `
})
export class FoodSearchComponent implements OnInit {
  public foodNameList: string[];
  public selectedFood: string;
  public foods: FoodItem[];

  @Output() updateFood: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.getFoodNames();

    $('input.typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'foods',
      source: this._matchFactory(this.foodNameList)
    })
    .on('typeahead:select', (e, food) => this.update(food));

  }

  public onSelect(food: string) {
    this.selectedFood = food;
  }

  public getFoodNames() {
    this.foodNameList = this.foods.map(food => food.name);
  }

  public update(searchedFood: string) {
    this.updateFood.emit(searchedFood);
  }

  private _matchFactory(data) {
    return function findMatches(q, cb) {
      var matches, substrRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      data.forEach(function(str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });

      cb(matches);
    };
  }
}
