const express = require('express');
const expressRoute = express.Router();

expressRoute.get('/', (req, res) => {
  res.send('We are on DELETE');
});

module.exports = expressRoute;
