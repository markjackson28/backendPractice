'use strict';

const express = require('express');

const router = express.Router();

router.get('/', getDefaultRoute);

function getDefaultRoute(req, res) {
  res.status(200).send('Hello API Practice');
}

module.exports = router;
