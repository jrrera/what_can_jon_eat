import {Component} from 'angular2/core';
import {FoodItem} from './food-item';

@Component({
  selector: 'food-detail',
  template: `
    <div class="row flex-center flex-column">
      <div class="food-details"
           [class.food-yes]="food.canEat" [class.food-no]="!food.canEat">
        <h1 *ngIf="food.canEat">Yes!</h1>
        <h1 *ngIf="!food.canEat">No :(</h1>
      </div>

      <div class="food-suggestion-wrapper" *ngIf="food.Suggestions && food.Suggestions.length">
       <hr />
        May I instead suggest:
        <ul>
          <li *ngFor="#suggestion of food.Suggestions" class="food-suggestion">
            {{ suggestion.name }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .food-details {
      padding: 20px;
      border-radius: 10px;
      width: 50%;
      text-align: center;
    }

    .food-suggestion-wrapper {
      text-align: left;
      width: 50%;
    }

    .food-suggestion-wrapper ul {
      padding-left: 0;
    }

    .food-suggestion {
      border-radius: 10px;
      list-style-type: none;
      list-style-position: outside;
      padding: 10px;
      text-align: center;
      background-color: rgba(0, 128, 0, 0.3);
    }

    .food-yes {
      background-color: rgba(0, 128, 0, 0.5);
    }

    .food-no {
      background-color: rgba(255, 0, 0, 0.5);
    }

  `],
  inputs: ['food']
})
export class FoodDetailComponent {
  public selectedFood: FoodItem;
}
