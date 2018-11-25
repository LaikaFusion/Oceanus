const brachiopodsList = require('./brachiopods/index');
const coralsList = require('./corals/index');
const seaAnemonesList = require('./seaAnemones/index');

const animals = [
    {
        status: 'success',
        brachiopods: {
            speciesName: 'brachiopods',
            animals: brachiopodsList
        },
        corals: {
            speciesName: 'corals',
            animals: coralsList
        },
        seaAnemones: {
            speciesName: 'Sea anemones',
            animals: seaAnemonesList
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