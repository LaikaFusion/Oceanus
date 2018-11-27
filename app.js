const express = require('express');
const app = express();
const morgan = require('morgan');

const animalRoutes = require('./api/routes/animals');

app.use(morgan('dev'));

app.use('/api/v1/animals', animalRoutes);

app.use((req, res, next) => {
    const error = new Error('404: Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;