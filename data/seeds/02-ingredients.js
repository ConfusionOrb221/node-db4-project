exports.seed = function(knex){
    return knex('ingredients').insert([
        {ingredient_name: 'Cup of sugar'},
        {ingredient_name: 'tsp of vanilla'},
        {ingredient_name: 'Cup of milk'}
    ]);
};