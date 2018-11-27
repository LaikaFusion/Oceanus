const brachiopodsList = require('./brachiopods/index');
const coralsList = require('./corals/index');
const seaAnemonesList = require('./seaAnemones/index');
const amphipodsList = require('./crustaceans/amphipods/index');
const barnaclesList = require('./crustaceans/barnacles/index');
const crabsAndLobstersList = require('./crustaceans/crabsAndLobsters/index');

const animals = {
        status: 'success',
        brachiopods: {
            id: 1,
            speciesName: 'brachiopods',
            animals: brachiopodsList
        },
        corals: {
            id: 2,
            speciesName: 'corals',
            animals: coralsList
        },
        seaAnemones: {
            id: 3,
            speciesName: 'Sea anemones',
            animals: seaAnemonesList
        },
        crustaceans: {
            id: 4,
            speciesName: 'crustaceans',
            amphipods: {
                speciesName: 'Amphipods',
                animals: amphipodsList
            },
            barnacles: {
                speciesName: 'Barnacles',
                animals: barnaclesList
            },
            crabsAndLobsters: {
                speciesName: 'Crabs and Lobsters',
                animals: crabsAndLobstersList
            }
        },
        fishes: {
            id: 5,
            speciesName: 'fishes'
        },
        hydrozoans: {
            id: 6,
            speciesName: 'hydrozoans'
        },
        jellyfishAndRelatedSpecies: {
            id: 7,
            speciesName: 'jellyfish and related species'
        },
        lancelets: {
            id: 8,
            speciesName: 'lancelets'
        },
        mammals: {
            id: 9,
            speciesName: 'mammals'
        },
        molluscs: {
            id: 10,
            speciesName: 'molluscs'
        },
        reptiles: {
            id: 11,
            speciesName: 'reptiles'
        },
        seaSpiders: {
            id: 12,
            speciesName: 'seaSpiders'
        },
        sponges: {
            id: 13,
            speciesName: 'sponges'
        },
        starfishAndOtherEchinoderms: {
            id: 14,
            speciesName: 'starfish and other echinoderms'
        },
        turnicates: {
            id: 15,
            speciesName: 'turnicates'
        },
        worms: {
            id: 16,
            speciesName: 'worms'
        }
}

module.exports = animals;