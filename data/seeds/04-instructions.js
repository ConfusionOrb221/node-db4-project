exports.seed = function(knex) {
    return knex('instructions').insert([
      {instruction_name: "preheat to 350F", recipe_id: 1, step_number: 1},
      {instruction_name: "Put in oven once preheated for 30 minutes", recipe_id: 1, step_number: 2},
      {instruction_name: "yea make it", recipe_id: 2, step_number: 1},
      {instruction_name: "just keep making it", recipe_id: 3, step_number: 1}
    ]);
};