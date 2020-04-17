
exports.seed = function(knex) {
    return knex('ingredients_detail').insert([
      {quantity: 1, ingredient_id: 1, recipe_id: 1},
      {quantity: 1.5, ingredient_id: 3, recipe_id: 1},
      {quantity: 2.5, ingredient_id: 2, recipe_id: 1},
      {quantity: 4, ingredient_id: 3, recipe_id: 2},
      {quantity: 2, ingredient_id: 2, recipe_id: 3},
    ]);
  };
  