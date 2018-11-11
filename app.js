const express = require('express');
const app = express();

const animalRoutes = require('./api/routes/animals');

app.use('/api/animals', animalRoutes);

module.exports = app;