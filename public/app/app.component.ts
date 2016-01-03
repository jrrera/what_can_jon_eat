import {Component} from 'angular2/core';
import {FoodItem} from './food-item';
import {FoodDetailComponent} from './food-detail.component';

@Component({
    selector: 'app',
    directives: [ FoodDetailComponent ],
    template: `
      <div class="container full-stretch">
        <div class="row">
          <div class="col-md-8 col-md-offset-4">
            <h1>What Can Jon Eat?</h1>
            <p class="lead">Jon is currently eating <strong>{{ currentDiet }}</strong></p>
          </div>
        </div>
        <div *ngIf="selectedFood">
          <div class="row flex-center search-container">
              <p class="search-prompt">Can Jon eat
                <input type="text" [(ngModel)]="selectedFood.name"> ?
              </p>
          </div>

          <food-detail [food]="selectedFood"></food-detail>

        </div>
        <ul class="foods-list">
          <li *ngFor="#food of foodsList"
              [class.selected]="food === selectedFood"
              (click)="onSelect(food)">
            {{ food.name }}: {{ food.canEat }}
          </li>
        </ul>
      </div>
    `,
    styles: [`
      .foods-list {
        background-color: #CFD8DC;
        color: white;
      }
      .selected {
        background-color: LightGray !important;
      }
  `]
})
export class AppComponent {
  public currentDiet = 'AIP Paleo';
  public foodsList: FoodItem[];
  public selectedFood: FoodItem;

  constructor() {
    $.get('/foods').then((response: FoodItem[]) => {
      this.foodsList = response;
      this.selectedFood = response[0];
    });
  }

  public onSelect(food: FoodItem) {
    this.selectedFood = food;
  }
}
