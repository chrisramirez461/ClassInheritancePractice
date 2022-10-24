class Meals {
    constructor(ingredients, difficulty, recipe) {
        this.ingredients = ingredients;
        this.difficulty = difficulty;
        this.recipe = recipe;

    }

    NewRecipe() {
        this.recipe++;
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
}

let Meals = new Meals(5, 'easy', 'Ommelete')
let Chicken = new Chicken(10, 'Medium', 'Orange Chicken', 'yes')
let Steak = new Steak(10, 'Medium', 'Steak and Potatoes', false)

console.log(Meals)
console.log(Chicken)
console.log(Steak)