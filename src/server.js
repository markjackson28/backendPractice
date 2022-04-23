'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./errorHandlers/404');
const errorHandler = require('./errorHandlers/500');
const mainRoutes = require('./routes/mainRoutes');

app.use(express.json());
app.use(mainRoutes);

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) {
      throw new Error('Missing Port');
    }
    app.listen(port, () => console.log(`Server up on ${port}`));
  }
}


