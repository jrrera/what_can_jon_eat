import {Injectable} from 'angular2/core';

@Injectable()
export class FoodService {
  getFoods() {
    return $.get('/foods');
  }
}
