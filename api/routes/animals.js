const express = require('express');
const router = express.Router();

const animals = require('../animals/animals');

router.get('/', (req, res, next) => {
    res.status(200).json(animals);
});

router.get('/:species', (req, res, next) => {
    const species = req.params.species;

    if(animals[species] === undefined) {
        res.status(404).json({
            status: '404: Not Found'
        });
    } else {
        res.status(200).json({
            status: animals.status,
            species: animals[species]
        });
    }
});

router.get('/:species/:subspecies', (req, res) => {
    const species = req.params.species;
    const subspecies = req.params.subspecies

    if(animals[species][subspecies] === undefined) {
        res.status(404).json({
            status: '404: Not Found'
        });
    } else {
        res.status(200).json({
            status: animals.status,
            species: animals[species][subspecies]
        });
    }
});

module.exports = router;