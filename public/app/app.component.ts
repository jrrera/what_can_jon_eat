import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
      <div class="container full-stretch">
        <div class="row">
          <div class="col-md-8 col-md-offset-4">
            <h1>What Can Jon Eat?</h1>
            <p class="lead">Jon is currently eating <strong>AIP Paleo</strong></p>
          </div>
        </div>

        <div class="row flex-center search-container">
            <p class="search-prompt">Can Jon eat <input type="text"> ?</p>
        </div>

      </div>
    `
})
export class AppComponent { }
