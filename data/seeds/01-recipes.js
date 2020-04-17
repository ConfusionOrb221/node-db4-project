exports.seed = function(knex){
    return knex('recipes').insert([
        {recipe_name: 'Cookies'},
        {recipe_name: 'Brownies'},
        {recipe_name: 'Lasagna'}
    ]);
};