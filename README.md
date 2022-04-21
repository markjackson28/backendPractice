<h1 align="center">Welcome to API Practice 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/markjackson28/backendPractice#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <!-- <a href="https://github.com/markjackson28/backendPractice/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a> -->
  <!-- <a href="https://github.com/markjackson28/backendPractice/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/markjackson28/API Practice" />
  </a> -->
</p>

> Practicing my backend/API skills

### 🏠 [Homepage](https://github.com/markjackson28/backendPractice#readme)

## Install

```sh
npm install
```

<!-- ## Run tests

```sh
npm run test
``` -->

## Routes

```sh
A GET request to http://localhost:3000/recipes returns:
Response body (JSON):
{
 "recipeNames":
  [
   "scrambledEggs",
   "garlicPasta",
   "chai"
  ]
}
Status: 200
```

```sh
A GET request to http://localhost:3000/recipes/details/garlicPasta returns:
If recipe exists: 
Response body (JSON):
{
 "details":
  {
   "ingredients": [
    "500mL water",
    "100g spaghetti",
    "25mL olive oil",
    "4 cloves garlic",
    "Salt"
   ],
   "numSteps":5
  }
}
Status: 200
---
If recipe does NOT exist: 
Response body (JSON): {}
Status: 200
```

```sh
A POST request to http://localhost:3000/recipes with body 
{
 "name": "butteredBagel", 
  "ingredients": [
   "1 bagel", 
   "butter"
  ], 
 "instructions": [
  "cut the bagel", 
  "spread butter on bagel"
 ] 
} 
returns:
Response body: None
Status: 201
---
If the recipe exists:
Response body (JSON):
{
 "error": "Recipe already exists"
}
Status: 400
```

```sh
A PUT request to http://localhost:3000/recipes with body 
{
 "name": "butteredBagel", 
  "ingredients": [
   "1 bagel", 
   "2 tbsp butter"
  ], 
 "instructions": [
  "cut the bagel", 
  "spread butter on bagel"
 ] 
} returns:
Response body: None
Status: 204
---
If the recipe does not exist:
Response body (JSON):
{
 "error": "Recipe does not exist"
}
Status: 404
```

## Author

👤 **Mark Thanadabouth**

* Github: [@markjackson28](https://github.com/markjackson28)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/markjackson28/backendPractice/issues). You can also take a look at the [contributing guide](https://github.com/markjackson28/backendPractice/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Mark Thanadabouth](https://github.com/markjackson28).<br />
This project is [MIT](https://github.com/markjackson28/backendPractice/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
