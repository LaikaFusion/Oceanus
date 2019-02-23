const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

const animalRoutes = require('./api/routes/animals');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/img', express.static('public'));
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

app.listen(PORT, err => {
    console.log(`Server listening on port ${PORT}`);
});