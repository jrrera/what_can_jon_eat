import {Component} from 'angular2/core';

interface FoodItem {
  id: number;
  name: string;
  canEat: boolean;
  Suggestions: string[];
  createdAt?: string;
  updatedAt?: string;
}

@Component({
    selector: 'app',
    template: `
      <div class="container full-stretch">
        <div class="row">
          <div class="col-md-8 col-md-offset-4">
            <h1>What Can Jon Eat?</h1>
            <p class="lead">Jon is currently eating <strong>{{ currentDiet }}</strong></p>
          </div>
        </div>

        <div class="row flex-center search-container">
            <p class="search-prompt">Can Jon eat
              <input type="text" [(ngModel)]="selectedFood.name"> ?
            </p>
        </div>
        <div> {{ selectedFood.canEat }} </div>
      </div>
    `
})
export class AppComponent {
  public currentDiet = 'AIP Paleo';
  public foodsList: FoodItem[];
  public selectedFood: FoodItem = {
    id: 0,
    name: 'bacon',
    canEat: true,
    Suggestions: []
  };

  constructor() {
    $.get('/foods').then((response: FoodItem[]) => {
      this.foodsList = response;
      this.selectedFood = response[1];
    });
  }
}
