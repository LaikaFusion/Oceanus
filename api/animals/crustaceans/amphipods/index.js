
const animals = {
    acanthoscinaAcanthodes: {
        id: 1,
        name: `Acanthoscina acanthodes`,
        description: `Length 4-6 mm (Acanthoscina acanthodes 1). Lobes of maxillae II fused proximally. Dactyls of P I and II in 5-6 times as short as ART 6. ART 2 of P V in 1.5 times as long as ART 2 of P IV. ART 5 and 6 of P VI subequal. Coxae V sharp both anteriorly and posteriorly (Acanthoscina acanthodes 3). UR straight, very long, thin.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/acanthoscinaAcanthodes/acanthoscina-acanthodes.png`
    },
    amphithyrusBispinosus: {
        id: 2,
        name: `Amphithyrus bispinosus`,
        description: `Length 3-4 mm (Amphithyrus bispinosus 1). CX V strongly pointed, projecting laterally (Amphithyrus bispinosus 4, unique character for this genus!). Posterodistal process of ART 5 of P II reaching top of sub-distal denticle of ART 6 (Amphithyrus bispinosus 3). ART 2 of P V two thirds as long as distal ART combined. P VII consisting of narrow ART 2 with rounded top, sometimes 1-2 rudimentary distal ART (Amphithyrus bispinosus 5). Telson triangular, with pointed top, slightly longer than fused (II+III) urosomite.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/amphithyrusBispinosus/amphithyrus-bispinosus.png`
    },
    anapronoeReinhardti: {
        id: 3,
        name: `Anapronoe reinhardti`,
        description: `Length 5-6 mm (Anapronoe reinhardti 1). With characters of genus Anapronoe.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/anapronoeReinhardti/anapronoe-reinhardti.png`
    },
    anchylomeraBlossevillei: {
        id: 4,
        name: `Anchylomera blossevillei`,
        description: `Length 6-11 mm (Anchylomera blossevillei 1). With characters of genus Anchylomera.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/anchylomeraBlossevillei/anchylomera-blossevillei.png`
    },
    andaniexisAustralis: {
        id: 5,
        name: `Andaniexis australis`,
        description: `Length 4-9 mm (Andaniexis australis 1). Resembling Andaniexis abyssi except in following particulars: ART 6 of P II not very slender (Andaniexis australis 2), almost as wide as, and scarcely longer than ART 5, subequal in length to ART 6 of P I; posterior margin has a very slight concavity distally which is defined by fairly long, stout spine against which dactyl impinges. Posterior margin of ART 2 of P IV and V perfectly smooth, entire. White eye spot present, apparently even larger than in Andaniexis abyssi. Bentho-pelagic.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/andaniexisAustralis/andaniexis-australis.png`
    },
    archaeoscinaSteenstrupi: {
        id: 6,
        name: `Archaeoscina steenstrupi`,
        description: `Length 3.5-4 mm (females), 2.5-3.5 mm (males) (Archaeoscina steenstrupi 1). ART 3 of mandibular palp curved, 1.5 times as longer as ART 1 and 2 combined. ART 5 of P I and II broad but not expanded distally, ART 6 more oval than conical. Rami of UR narrow, lanceolate, with serrate margins. Telson reaching middle of basipodite of UR III.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/archaeoscinaSteenstrupi/archaeoscina-steenstrupi.png`
    },
    bathystegocephalusGlobosus: {
        id: 7,
        name: `Bathystegocephalus globosus`,
        description: `Length to 12 mm (Bathystegocephalus globosus 1). With characters of genus Bathystegocephalus. Live animals intensely dark.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/bathystegocephalusGlobosus/bathystegocephalus-globosus.png`
    },
    calamorhynchusPellucidus: {
        id: 8,
        name: `Calamorhynchus pellucidus`,
        description: `Length to 23 mm (Calamorhynchus pellucidus 1). With characters of genus Calamorhynchus.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/calamorhynchusPellucidus/calamorhynchus-pellucidus.png`
    },
    cranocephalusScleroticus: {
        id: 9,
        name: `Cranocephalus scleroticus`,
        description: `Length 6-21 mm (Cranocephalus scleroticus 1). With characters of genus Cranocephalus.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/cranocephalusScleroticus/cranocephalus-scleroticus.png`
    },
    ctenoscinaBrevicaudata: {
        id: 10,
        name: `Ctenoscina brevicaudata`,
        description: `Length to 4 mm (Ctenoscina brevicaudata 1). Pereonites I and II without mid-dorsal spines. Anterodistal corner of ART 2 of P V with two thin, slightly curved processes (one may be weak). Anterior margin of this ART slightly serrate. Coxae II-V sharp both anteriorly and posteriorly (Ctenoscina brevicaudata 2).`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/ctenoscinaBrevicaudata/ctenoscina-brevicaudata.png`
    },
    cyllopusLucasi: {
        id: 11,
        name: `Cyllopus lucasi`,
        description: `Length to 23 mm. Head longer than pereonites I-III combined (Cyllopus lucasi 1). P I weakly chelate (Cyllopus lucasi 2). ART 2 of P I subequal to distal ART combined; ART 6 expanded distally, with serrate triangular posterodistal lobe reaching one quarter length of ART 6; ART 6 conical-oval, shorter than ART 5; dactyl as long as two thirds of ART 6. Posterodistal process of ART 5 of P II reaching distal end of ART 6; ART 6 shorter than 5. P V and VI long, with ART 6 as long as ART 4 and 5 combined; dactyl thin, 8 times as short as ART 6. Proximal part of ART 2 of P VII strongly broadened, ART 2 sharply narrowing distally, with concave posterior margin. Distal ART combined shorter than ART 2.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/cyllopusLucasi/cyllopus-lucasi.png`
    },
    cyphocarisAnonyx: {
        id: 12,
        name: `Cyphocaris anonyx`,
        description: `Length to 14 mm (Cyphocaris anonyx 1). Pereonite I overlapping head, produced anteriorly, rounded or (rarely) sharp-pointed, curved (Cyphocaris anonyx 2). Eyes absent. Convex anterior margin of CX IV covering CX III and posterior half of CX II. P III-V weakly subchelate. ART 2 of P V with posterior sword-like tooth; both margins of this tooth deeply serrate, tooth relatively short, not longer than ART 3-5 of P V combined (Cyphocaris anonyx 3). Posterior margins of P V-VII dentate, each with 8-12 denticles. Posteroventral corner of epimeral plate III at ca. 90°. Live animals red, orange in alcohol.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/cyphocarisAnonyx/cyphocaris-anonyx.png`
    },
    cyphocarisChallengeri: {
        id: 13,
        name: `Cyphocaris challengeri`,
        description: `Length to 13 mm (Cyphocaris challengeri 1). Pereonite I produced anteriorly, overlapping head, form changing from cone-like (in first turn in juveniles) to subrectangular or even rounded (Cyphocaris challengeri 2). Eyes large, reniform. CX IV large, with strongly convex anterior margin, covering all coxae I-III. CX V wider than high. ART 2 of P V with posterodistal sword-like tooth, both margins of tooth smooth, length subequal to distal part of P (ART 3-7 combined). In live animals "swords" projecting laterally. Besides sword-like tooth, posterior margin of ART 2 of P V with 2-3 denticles (Cyphocaris challengeri 3). ART 2 of P VI-VII with strongly serrate posterior lobe, broader in P VI than in P VII. Posteroventral corners of epimeral plates I-III produced posteriorly, sharp. Live animals pale-brown.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/cyphocarisChallengeri/cyphocaris-challengeri.png`
    },
    cystisomaFabricii: {
        id: 14,
        name: `Cystisoma fabricii`,
        description: `Length to 92 (females Cystisoma fabricii 1) - 50 (males) mm. Head with 12-16 marginal denticles on each side (Cystisoma fabricii 2), only 2 pairs of ventral denticles ("top" and "glandular"). MD with only one curved denticle. Posterodistal process of ART 5 of P II finely serrate (Cystisoma fabricii 3).`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/cystisomaFabricii/cystisoma-fabricii.png`
    },
    cystisomaLongipes: {
        id: 15,
        name: `Cystisoma longipes`,
        description: `Length to 80 (females) mm (Cystisoma longipes 1). Head with 15-18 marginal denticles on each side, and 5-6 pairs of ventral denticles. MD with 2-3 denticles (Cystisoma longipes 2, central + 1-2 lateral). Posterodistal process of ART 5 of P II strongly serrate. P long and thin; P V subequal in length to entire body; ART 2 of P VII almost linear`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/cystisomaLongipes/cystisoma-longipes.png`
    },
    cystisomaMagna: {
        id: 16,
        name: `Cystisoma magna`,
        description: `Length to 140 (females, Cystisoma magna 1) - 70 (males) mm. Head with 10-14 marginal denticles on each side, 5-6 pairs of ventral denticles (Cystisoma magna 3). Pereon with especially strong dorsal carina. MD with only one central denticle (Cystisoma magna 2). Posterodistal process of ART 5 of P II strongly serrate. Distal parts of ART 6 of P III-VII not glandular in adult females. Urosoma combined with UR not longer than pleon.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/amphipods/cystisomaMagna/cystisoma-magna.png`
    }
};

module.exports = animals;