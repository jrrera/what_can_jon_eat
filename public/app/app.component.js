System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    var _this = this;
                    this.currentDiet = 'AIP Paleo';
                    this.selectedFood = {
                        id: 0,
                        name: 'bacon',
                        canEat: true,
                        Suggestions: []
                    };
                    $.get('/foods').then(function (response) {
                        _this.foodsList = response;
                        _this.selectedFood = response[1];
                    });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n      <div class=\"container full-stretch\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-4\">\n            <h1>What Can Jon Eat?</h1>\n            <p class=\"lead\">Jon is currently eating <strong>{{ currentDiet }}</strong></p>\n          </div>\n        </div>\n\n        <div class=\"row flex-center search-container\">\n            <p class=\"search-prompt\">Can Jon eat\n              <input type=\"text\" [(ngModel)]=\"selectedFood.name\"> ?\n            </p>\n        </div>\n        <div> {{ selectedFood.canEat }} </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map