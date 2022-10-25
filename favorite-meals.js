class Meals {
    constructor(ingredients, difficulty, recipe) {
        this.ingredients = ingredients;
        this.difficulty = difficulty;
        this.recipe = recipe;

    }

    addGarnish() {
        this.ingredients++;
    }
}

class Chicken extends Meals {
    constructor (ingredients, difficulty, recipe, yummy) {
        super(ingredients, difficulty, recipe);
        this.yummy = yummy;
    }
}

class Steak extends Meals {
    constructor (ingredients, difficulty, recipe, mediumWell = true) {
        super(ingredients, difficulty, recipe);
        this.mediumWell = mediumWell;
    }

    serve() {
        if(this.mediumWell) {
            this.mediumWell = true;
        }
        else {
            console.log('YOU OVERCOOKED IT!!!')
        }
    }
};

let meals = new Meals(5, 'easy', 'Ommelete');
let chicken = new Chicken(10, 'Medium', 'Orange Chicken', 'yes');
let steak = new Steak(10, 'Medium', 'Steak and Potatoes', true);
let steak2 = new Steak(10, 'Medium', 'Steak and Potatoes', false);


console.log(meals);
console.log(chicken);
console.log(steak);

meals.addGarnish();
chicken.addGarnish();
steak.addGarnish();

console.log(meals);
console.log(chicken);
console.log(steak);

steak.serve();
console.log(steak);

steak2.serve();
console.log(steak2);