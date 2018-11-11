const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling get request to /animals'
    });
});

router.get('/:species', (req, res, next) => {
    const species = req.params.species;

    res.status(200).json({
        message: `this is the species ${species}`
    });
});

module.exports = router;