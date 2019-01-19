const baseURL = require('../../../baseURL');

const animals = {
    bandedCoralShrimp: {
        id: 1,
        name: `Banded coral shrimp (Stenopus hispidus)`,
        description: `Like all members of this group of shrimps, the Stenopodids, the third pair of walking legs is of different shape and bears claws. This cleaning shrimp is easily recognized by the bands of red and white. The bands of red can be purple bordered. The bands extend onto the claws. Some parts of the animal and its walking legs can be translucent. The abdomen, carapace and third pair of legs are spiny. Size: up to about 5 cm.`,
        habitat: `Inhabits the coral reefs near openings or recesses. The shrimp waves its antennae to attract fish. It will feed on the parasites it removes from the fish's skin. `,
        habitatDepths: `ranges from 2 m down to 40 m.`,
        distribution: `All throughout the Caribbean.`,
        remarks: `When approached carefully with an extended hand, it may come out of its protection to clean it.`,
        img: `${baseURL}/img/crustaceans/img/shrimpPrawnKrill/bandedCoralShrimp/banded-coral-shrimp.jpg`
    },
    pedersonCleaningShrimp: {
        id: 2,
        name: `Pederson cleaning shrimp (Periclimenes pedersoni)`,
        description: `A small shrimp, translucent with bluish or lavender spots on the tail, the abdomen and legs. Size: up to 3 cm.`,
        habitat: `It lives in association with a variety of sea anemones, like Lebrunia danae, Bartholomea lucida, Bartholomea annulata and Condylactis gigantea. The shrimp waves its antennae to attract fish. It feeds on parasites that it removes from the fish's skin.`,
        habitatDepths: `ranges from 2 m down to 20 m.`,
        distribution: `All over the Caribbean.`,
        remarks: `When approached carefully with an extended hand, it may come out of its protection to clean it.`,
        img: `${baseURL}/img/crustaceans/img/shrimpPrawnKrill/pedersonCleaningShrimp/pederson-cleaning-shrimp.jpg`
    },
    redNightShrimp: {
        id: 3,
        name: `Red night shrimp (Rhynchocinetes rigens)`,
        description: `This nocturnal shrimp has large dark eyes that light up in torchlight. It has a red body with white or light bands across its body.`,
        size: `up to 6 cm.`,
        habitat: `Since this is a nocturnal shrimp, it is hidden deep in the reef during the day. At night it is more often visible, though still shy. Its large eyes are easily seen in torchlight.`,
        habitatDepths: `ranges from 6 m down to 30 m.`,
        distribution: `All throughout the Caribbean.`,
        remarks: `The Red night shrimp Rhinchocinetes rigens also is red with light bands, but its bands run across its body.`,
        img: `${baseURL}/img/crustaceans/img/shrimpPrawnKrill/redNightShrimp/red-night-shrimp.jpg`
    },
    scarletStripedCleaningShrimp: {
        id: 4,
        name: `Scarlet-striped cleaning shrimp (Lysmata grabhami)`,
        description: `Like all members of this group of shrimps, the Stenopodids, the third pair of walking legs is of different shape and bears claws. The colors make identification easy. A bright white stripe flanked by two broad red bands extend from the antennae to the tip of the tail. The color of the rest of the animal is cream to yellow. Two pairs of bright white antennae.`,
        habitat: `Inhabits the coral reefs near openings or recesses. The shrimp waves its antennae to attract fish. It will feed on the parasites it removes from the fish's skin. `,
        habitatDepths: `ranges from 1 m down to 30 m.`,
        distribution: `Occurs in shallow reef areas al over the Caribbean.`,
        remarks: `When approached carefully with an extended hand, it may come out of its protection to clean it.`,
        img: `${baseURL}/img/crustaceans/img/shrimpPrawnKrill/scarletStripedCleaningShrimp/scarlet-striped-cleaning-shrimp.jpg`
    }
};

module.exports = animals;