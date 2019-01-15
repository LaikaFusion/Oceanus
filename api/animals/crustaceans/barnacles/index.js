const baseURL = require('../../../baseURL');

const animals = {
    ribbedBarnacle: {
        id: 1,
        name: `Ribbed barnacle (Tetraclita stalactifera)`,
        description: `The ribbed barnacle chosen here as a representative of several genera of barnacle-like animals. They all live near the low water mark, although some may occur to great depths. The shape of the animals is conical to tubular, with calcareous plates. The color may vary from white to brown. Size: up to 3 cm.`,
        habitat: `Sessile, attached to any surface, wood or stone, man-made or natural. Depth: ranges from around the low water mark down to 40 m.`,
        distribution: `Common`,
        img: `${baseURL}/img/crustaceans/img/barnacles/ribbedBarnacle/ribbed-barnacle.png`
    },
    smoothGooseNeckBarnacle: {
        id: 2,
        name: `Smooth goose-neck barnacle (Lepas anatifera)`,
        description: `Body covered by five translucent, white to bluish-white shell plates. The animal is attached to the substrate by a fleshy stalk that can reach a length of several centimeters. Size: up to 3 cm.`,
        habitat: `Usually attached to floating debris, rafts, buoys or ship bottoms.`,
        distribution: `Common`,
        remarks: `Two more species of Lepas occur in the region, Lepas anserifa, with whiter shell plates which are radially grooved, and Lepas pectinata, with scaly or even spiny protrusions on the plates.`,
        img: `${baseURL}/img/crustaceans/img/barnacles/smoothGooseNeckBarnacle/smooth-goose-neck-barnacle.png`
    }
};

module.exports = animals;