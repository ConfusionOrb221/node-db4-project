const express = require('express');

const RecipiesRouter = require('./recipies/recipies-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipiesRouter);

module.exports = server;