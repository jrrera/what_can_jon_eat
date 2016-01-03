System.register([], function(exports_1) {
    var FOODS;
    return {
        setters:[],
        execute: function() {
            exports_1("FOODS", FOODS = [
                { id: 1, name: 'broccoli', canEat: true, Suggestions: [] },
                { id: 2, name: 'cheese', canEat: false, Suggestions: [{ id: 1, name: 'prosciutto' }] },
                { id: 3, name: 'beef', canEat: true, Suggestions: [] },
            ]);
        }
    }
});
//# sourceMappingURL=mock-foods.js.map