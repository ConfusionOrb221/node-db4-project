const db = require('../data/dbConfig.js');

function getRecipes(){
    return db('recipes');
}

function getShoppingList(recipe_id){
    return db.select('recipes.recipe_name', 'ingredients.ingredient_name', 'ingredients_detail.quantity')
    .from('recipes')
    .join('ingredients_detail', 'ingredients_detail.recipe_id', '=', 'recipes.id')
    .join('ingredients', 'ingredients.id', '=', 'ingredients_detail.ingredient_id')
    .where('recipes.id', '=', recipe_id)             
    .catch(err =>{
        console.log(err);
        return null;
    })
}

function getInstructions(recipe_id){
    return db.select('instructions.*')
    .from('recipes')
    .join('instructions', 'instructions.recipe_id', '=', 'recipes.id')
    .where('recipes.id', '=', recipe_id)
    .catch(err=>{
        console.log(err);
        return null;
    })
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}