const express = require('express');
const router = express.Router();

const animals = require('../animals/animals');

router.get('/', (req, res, next) => {
    res.status(200).json(animals);
});

router.get('/:species', (req, res, next) => {
    const species = req.params.species;

    res.status(200).json({
        message: `this is the species ${species}`
    });
});

module.exports = router;