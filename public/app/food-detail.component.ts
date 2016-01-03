import {Component} from 'angular2/core';
import {FoodItem} from './food-item';

@Component({
  selector: 'food-detail',
  template: `
  <div> Can he eat it? {{ food.canEat }} </div>
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
