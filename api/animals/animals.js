const brachiopodsList = require('./brachiopods/index');

const animals = [
    {
        status: 'success',
        brachiopods: {
            speciesName: 'brachiopods',
            animals: brachiopodsList
        },
        corals: {
            speciesName: 'corals'
        },
        seaAnemones: {
            speciesName: 'Sea anemones'
        },
        crustaceans: {
            speciesName: 'crustaceans'
        },
        fishes: {
            speciesName: 'fishes'
        },
        hydrozoans: {
            speciesName: 'hydrozoans'
        },
        jellyfishAndRelatedSpecies: {
            speciesName: 'jellyfish and related species'
        },
        lancelets: {
            speciesName: 'lancelets'
        },
        mammals: {
            speciesName: 'mammals'
        },
        molluscs: {
            speciesName: 'molluscs'
        },
        reptiles: {
            speciesName: 'reptiles'
        },
        seaSpiders: {
            speciesName: 'seaSpiders'
        },
        sponges: {
            speciesName: 'sponges'
        },
        starfishAndOtherEchinoderms: {
            speciesName: 'starfish and other echinoderms'
        },
        turnicates: {
            speciesName: 'turnicates'
        },
        worms: {
            speciesName: 'worms'
        }
    }
];

module.exports = animals;