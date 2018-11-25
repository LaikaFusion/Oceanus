const express = require('express');
const router = express.Router();

const animals = require('../animals/animals');

router.get('/', (req, res, next) => {
    res.status(200).json(animals);
});

router.get('/:species', (req, res, next) => {
    const species = req.params.species;

    if(animals[0][species] === undefined) {
        res.status(404).json({
            status: '404: Not Found'
        });
    } else {
        res.status(200).json({
            status: animals[0].status,
            species: animals[0][species]
        });
    }
});

module.exports = router;