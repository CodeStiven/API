const express = require('express');
const expressRoute = express.Router();

expressRoute.get('/', (req, res) => {
  res.send('We are on PUT');
});

module.exports = expressRoute;
