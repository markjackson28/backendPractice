'use strict';

const express = require('express');

const router = express.Router();
let recipeData = require('../data/recipes.json');

router.get('/', getDefaultRoute);
router.get('/recipes', getRecipeNames);
router.get('/recipes/details/:id', getIngredients);

function getDefaultRoute(req, res) {
  res.status(200).send('Hello Practice API');
}

function getRecipeNames(req, res) {
  let recipeNames = [];
  recipeData.recipes.forEach(element => recipeNames.push(element.name));
  res.status(200).send({
    'Response Body (JSON)': {
      recipeNames: recipeNames
    },
    'Status': res.statusCode
  });
};

function getIngredients(req, res) {
  const id = req.params.id;
  const ingredients = recipeData.recipes.find(({ name }) => name === id);
  if (!ingredients) {
    res.status(200).send({
      'Response Body (JSON)': {},
      'Status': res.statusCode
    });
  }
  res.status(200).send({
    'Response Body (JSON)': {
      'details': {
        'ingredents': ingredients.ingredients,
        'numSteps': ingredients.length
      }
    },
    'Status': res.statusCode
  });
}

module.exports = router;
