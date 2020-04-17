exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl =>{
            tbl.increments();
            tbl.text('recipe_name', 128)
            .unique()
            .notNullable();
        })
        .createTable('ingredients', tbl =>{
            tbl.increments();
            tbl.text('ingredient_name')
            .unique()
            .notNullable();
        })
        .createTable('ingredients_detail', tbl=>{
            tbl.increments();
            tbl.float('quantity')
            .unsigned()
            .notNullable();
            tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
            tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        })
        .createTable('instructions', tbl=>{
            tbl.increments();
            tbl.text('instruction_name', 128)
            .unique()
            .notNullable();
            tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
            tbl.integer('step_number')
            .unsigned()
            .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients_detail')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
