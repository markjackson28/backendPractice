'use strict';

const express = require('express');

const router = express.Router();
let recipeData = require('../data/recipes.json');

router.get('/', getDefaultRoute);
router.get('/recipes', getRecipeNames);
router.get('/recipes/details/:id', getIngredients);
router.post('/recipes', postRecipe);
router.put('/recipes', putRecipe);

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
  const foundIngredients = recipeData.recipes.find(({ name }) => name === id);
  if (!foundIngredients) {
    res.status(200).send({
      'Response Body (JSON)': {},
      'Status': res.statusCode
    });
  }
  res.status(200).send({
    'Response Body (JSON)': {
      'details': {
        'ingredents': foundIngredients.ingredients,
        'numSteps': foundIngredients.ingredients.length
      }
    },
    'Status': res.statusCode
  });
}

function postRecipe(req, res) {
  let data = req.body;
  let foundRecipe = recipeData.recipes.filter(element => element.name === data.name);
  if (foundRecipe.length) {
    res.status(400).send({
      'Response Body (JSON)': {
        'error': 'Recipe already exists'
      },
      'Status': res.statusCode
    });
  } else {
    recipeData.recipes.push(data);
    res.status(201).send({
      'Response Body': 'None',
      'Status': res.statusCode
    });
  }
}

function putRecipe(req, res) {
  let data = req.body;
  let objIndex = recipeData.recipes.findIndex(obj => obj.name === data.name);
  if (objIndex < 0) {
    res.status(404).send({
      'Response Body (JSON)': {
        'error': 'Recipe does not exists'
      },
      'Status': res.statusCode
    });
  } else {
    recipeData.recipes[objIndex] = data;
    res.status(204).send({
      'Response Body': 'None',
      'Status': res.statusCode
    });
  }
}

module.exports = router;
