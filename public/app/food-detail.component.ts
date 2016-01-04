import {Component} from 'angular2/core';
import {FoodItem} from './food-item';

@Component({
  selector: 'food-detail',
  template: `
  <h1> Edible? {{ food.canEat }} </h1>
  <div *ngIf="food.Suggestions && food.Suggestions.length">
    Suggestions:
    <ul>
      <li *ngFor="#suggestion of food.Suggestions">
        {{ suggestion.name }}
      </li>
    </ul>
  </div>
  `,
  inputs: ['food']
})
export class FoodDetailComponent {
  public selectedFood: FoodItem;
}
