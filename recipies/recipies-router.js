const express = require('express');

const recipes = require('./recipies-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    recipes.getRecipes().then(recipes =>{
        res.json({recipes});
    })
    .catch(err =>{
        res.status(500).json({ message: 'Failed to get recipes' });
    })
});

router.get('/:id/ingredients', (req, res) => {
    const { id } = req.params;
    recipes.getShoppingList(id)
    .then(ingredients =>{
        if(ingredients){
            res.json(ingredients);
        } else {
            res.status(404).json({message: 'Could not find specified recipe'})
        }
    })
    .catch(err =>{
        res.status(500).json({message: 'Failed to get Recipes'})
    })
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;

    recipes.getInstructions(id)
    .then(instructions =>{
        if(instructions){
            res.json(instructions);
        } else {
            res.status(404).json({message: 'Couldnt find instructions'})
        }
    })
    .catch(err =>{
        res.status(500).json({message: 'Failed to get instructions'})
    })
});

module.exports = router;