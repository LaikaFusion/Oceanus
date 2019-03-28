const brachiopodsList = require('./brachiopods/index');
const coralsList = require('./corals/index');
const seaAnemonesList = require('./seaAnemones/index');
const amphipodsList = require('./crustaceans/amphipods/index');
const barnaclesList = require('./crustaceans/barnacles/index');
const crabsAndLobstersList = require('./crustaceans/crabsAndLobsters/index');
const hoodedShrimpList = require('./crustaceans/hoodedShrimp/index');
const isopodsList = require('./crustaceans/isopods/index');
const opossumShrimpList = require('./crustaceans/opossumShrimp/index');
const ostracodsList = require('./crustaceans/ostracods/index');
const shrimpPrawnKrillList = require('./crustaceans/shrimpPrawnKrill/index');
const waterFleasList = require('./crustaceans/waterFleas/index');
const otherCrustaceansList = require('./crustaceans/otherCrustaceans/index');
const bonyFishList = require('./fishes/bonyFish/index');
const lampreysAndHagfishesList = require('./fishes/lampreysAndHagFishes/index');
const raysSkatesAndSharksList = require('./fishes/raysSkatesAndSharks/index');
const hydrozoansList = require('./hydrozoans/index');
const boxJellyfishAndSeaWaspsList = require('./jellyfishAndRelatedSpecies/boxJellyfishAndSeaWasps/index');
const combJellyfishList =  require('./jellyfishAndRelatedSpecies/combJellyfish/index');
const jellyfishList = require('./jellyfishAndRelatedSpecies/jellyfish/index');
const lanceletsList = require('./lancelets/index');
const dolphinsAndPorpoisesList = require('./mammals/dolphinsAndPorpoises/index');
const reptilesList = require('./reptiles/')

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
                id: 1,
                speciesName: 'Amphipods',
                animals: amphipodsList
            },
            barnacles: {
                id: 2,
                speciesName: 'Barnacles',
                animals: barnaclesList
            },
            crabsAndLobsters: {
                id: 3,
                speciesName: 'Crabs and Lobsters',
                animals: crabsAndLobstersList
            },
            hoodedShrimp: {
                id: 4,
                speciesName: 'Hooded Shrimp',
                animals: hoodedShrimpList
            },
            isopods: {
                id: 5,
                speciesName: 'Isopods',
                animals: isopodsList
            },
            opossumShrimp: {
                id: 6,
                speciesName: 'Opossum Shrimp',
                animals: opossumShrimpList
            },
            ostracods: {
                id: 7,
                speciesName: 'Ostracods',
                animals: ostracodsList
            },
            shrimpPrawnKrill: {
                id: 8,
                speciesName: 'Shrimp, Prawn and Krill',
                animals: shrimpPrawnKrillList
            },
            waterFleas: {
                id: 9,
                speciesName: 'Water Fleas',
                animals: waterFleasList
            },
            otherCrustaceans: {
                id: 10,
                speciesName: 'Other Crustaceans',
                animals: otherCrustaceansList
            }
        },
        fishes: {
            id: 5,
            speciesName: 'fishes',
            bonyFish: {
                id: 1,
                speciesName: 'Bony Fish',
                animals: bonyFishList
            },
            lampreysAndHagFishes: {
                id: 2,
                speciesName: 'Lampreys and hagfishes',
                animals: lampreysAndHagfishesList
            },
            raysSkatesAndSharks: {
                id: 3,
                speciesName: 'Rays, skates and sharks',
                animals: raysSkatesAndSharksList
            }
        },
        hydrozoans: {
            id: 6,
            speciesName: 'hydrozoans',
            animals: hydrozoansList
        },
        jellyfishAndRelatedSpecies: {
            id: 7,
            speciesName: 'jellyfish and related species',
            boxJellyfishAndSeaWasps: {
                id: 1,
                speciesName: 'Box jellyfish and sea wasps',
                animals: boxJellyfishAndSeaWaspsList
            },
            combJellyfish: {
                id: 2,
                speciesName: 'Comb jellyfish',
                animals: combJellyfishList
            },
            jellyfish: {
                id: 3,
                speciesName: 'Jellyfish',
                animals: jellyfishList
            }
        },
        lancelets: {
            id: 8,
            speciesName: 'lancelets',
            animals: lanceletsList
        },
        mammals: {
            id: 9,
            speciesName: 'mammals',
            dolphinsAndPorpoises: {
                id: 1,
                speciesName: 'Dolphins and Porpoises',
                animals: dolphinsAndPorpoisesList
            }
        },
        molluscs: {
            id: 10,
            speciesName: 'molluscs'
        },
        reptiles: {
            id: 11,
            speciesName: 'reptiles',
            animals: reptilesList
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