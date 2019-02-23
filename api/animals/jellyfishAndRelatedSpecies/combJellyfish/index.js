
const animals = {
    beroeCucumis: {
        id: 1,
        name: `Beroe cucumis`,
        description: `Body sack or vase shaped, often compressed in what corresponds to the tentacular plane. Ciliary comb-rows equal in length extending from the aboral pole and to about three-quarters of the distance towards the mouth. There is a row of branched papillae in the form of a figure-8 around the pole plate at the aboral pole. The four meridional canals of each broad side are in connexion orally by means of the oral forks of the pharyngeal. From the meridional canals branched anastomoses protrude into the ecto-mesoderm.`,
        color: `Mature specimens are pink in colour especially along the meridional canals and comb rows.`,
        juveniles: `The young cannot be distinguished from Beroe gracilis.`,
        size: `Adult up to 150 mm high.`,
        distribution: `All North Sea, including Skagerrak and Kattegat. North Atlantic and the coastal waters of NW Europe.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfish/beroeCucumis/beroe-cucumis.jpeg`
    },
    beroeForskalii: {
        id: 2,
        name: `Beroe forskalii`,
        description: `Body strongly compressed. Fusions of diverticulae of meridional canals very dense. Mouth opening wide, with large, half circle-shaped lips.`,
        color: `almost transparent in young specimens, becoming slightly pinkish with age`,
        size: `20 cm`,
        remarks: `Cited as a warm water species, so its presence in Antarctic waters must be confirmed.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfish/beroeForskalii/beroe-forskalii.jpg`
    },
    beroeGracilis: {
        id: 3, 
        name: `Beroe gracilis`,
        description: `Body slender cylindrical with slight lateral compression in the “tentacular” plane. Ciliary comb-rows equal in length extending from the aboral pole to about three quarters of the distance towards the mouth. There is a row of branched papillae in the from of a figure-8 around the pole plate at the aboral pole. The four meridional canals of each broad side are in connexion orally by means of the oral fork of the pharyngeal canal. The meridional canals have no side branches.`,
        color: `The adult has a milky appearance; some specimens may be coloured slightly pink. The pink colouration of the young is concentrated in pigment-spots.`,
        juveniles: `The young can be distinguished from the other orders by the lack of tentacles and by the arrangement of the comb-rows, which are situated in 8 single rows as in the adults. The young cannot be distinguished from Beroe cucumis.`,
        size: `Adult up to 30 mm high.`,
        distribution: `Southern North Sea, Skagerrak, Kattegat. NE Atlantic and the coastal waters of NW Europe.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfish/beroeGracilis/beroe-gracilis.jpg`
    },
    beroeOvata: {
        id: 4,
        name: `Beroe ovata`,
        description: `Body mitten-shaped. Lateral compression very marked. Four meridional canals of each broad side connected orally by oral forks of paragastric canal. Eight meridional canals interconnected by loose network of numerous diverticulae, with a few anastomoses forming a wide meshwork.`,
        juveniles: `Young Beroe ovata cannot be distinguished from Beroe cucumis.`,
        color: `dull milky, pink or reddish brown`,
        size: `up to 115 mm, usually 60-70 mm.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfish/beroeOvata/beroe-ovata.jpg`
    },
    bolinopsisInfundibulum: {
        id: 5,
        name: `Bolinopsis infundibulum`,
        description: `Body pear shaped in sagittal plane, laterally compressed in the tentacular plane; large oral lobes comprise one third of the body height. Sub-tentacular comb rows extend in the oral extend in the oral direction into the auricles; subsagittal comb rows much longer and extend into the free outer ends of the oral lobes. Internally the meridional gastrovascular canals anastomose and send loops into lobes and auricles. Tentacle reduced in length, without sheaths, situated at each side of elongated mouth; accessory tentacles present along the edge of the mouth.`,
        color: `The adult has a milky appearance, the extension of the subsagittal comb-rows into the oral lobes may be black in its outer part.`,
        juveniles: `The early larva may be distinguished from the young stages of the Genus Pleurobrachia by the V-shape of the comb-rows in pairs close to each other at the aboral end and more distant orally. The tentacle of the larva is inserted in the body as in the Genus Bolinopsis while in the Genera Pleurobrachia and Mertensia the basis of the monofilamentous tentacle is on the surface of the body. During development the tentacle bulbs migrate orally, the oral lobes appear and with it the modifications of the gastrovascular system. It is extremely fragile, and only when caught and preserved with great care will identifiable fragments of the animal remain.`,
        size: `Adult up to 150 mm high.`,
        distribution: `All North Sea, including Skagerrak an Kattegatt; occasionally in the Baltic Sea. North Atlantic and the coastal waters of NW Europe.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfish/bolinopsisInfundibulum/bolinopsis-infundibulum.jpg`
    },
    cestumVeneris: {
        id: 6,
        name: `Cestum veneris`,
        description: `Body flat, ribbon-shaped, strongly compressed in the tentacular axis, with the sides strongly extended in the stomodeal axis. Subtentacular comb rows reduced, represented by 4 short tracts close to sides of sense organ. At a short distance, 4 long stomodeal comb rows commence, extending along sides of arched aboral edge of animal. Tentacles with tentilla, closely set in a double row, extending along sides of oral edge of animal. Subtentacular mesodermal canals arise under the subtentacular comb rows.`,
        color: `young animals transparent, older ones often becoming violet with greenish-blue or ultra-marine fluorescence.`,
        size: `Length along the stomodeal axis: up to 2 m.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfish/cestumVeneris/cestum-veneris.jpg`
    },
    eurhamphaeaVexilligera: {
        id: 7,
        name: `Eurhamphaea vexilligera`,
        description: `Body resembles Bolinopsidae, with two conical processes on aboral end, terminating in long flexible filaments. Subtentacular comb rows extend onto these processes.`,
        color: `body transparent, with red vesicles dispersed on the body, producing a reddish-brown ink with bioluminescent properties.`,
        size: `Length up to 100 mm.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfish/eurhamphaeaVexilligera/eurhamphaea-vexilligera.jpg`
    },
    hormiphoraPlumosa: {
        id: 8,
        name: `Hormiphora plumosa`,
        description: `Pear-shaped body with no lateral compression; ciliary comb rows equal in length, starting some distance below aboral pole and extending two thirds of distance to mouth. Tentacle sheaths pressed close to stomodeum. Long tentacles with two types of slightly yellowish tentilla and cock-shaped expansion on upper side of base.`,
        size: `Length up to 15-20 mm.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfish/hormiphoraPlumosa/hormiphora-plumosa.jpg`
    },
    lampeaPancerina: {
        id: 9,
        name: `Lampea pancerina`,
        description: `Body cylindrical, only a little narrower towards the oral end. Mouth opening wide. Lips dilatable to a wide sole on which the animal moves over solid surfaces`,
        color: `transparent`,
        size: `Length up to 70 mm.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfish/lampeaPancerina/lampea-pancerina.jpg`
    },
    leucotheaMulticornis: {
        id: 10,
        name: `Leucothea multicornis`,
        description: `With the characters of the family. Color of oral lobes and papillae yellow or brown`,
        length: `length up to 200 mm`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfish/leucotheaMulticornis/leucothea-multicornis.jpg`
    },
    mnemiopsisLeidyi: {
        id: 11,
        name: `Mnemiopsis leidyi`,
        description: `Body laterally compressed, with large lobes arising near stomodeum, generating 4 deep noticeable furrows. Aboral apex not as acute as in Bolinopsis. Outer surface smooth`,
        color: `Color usually transparent or slightly milky translucent.`,
        size: `Length up to 100 mm.`,
        remarks: `Alcinoe rosea from North of the Malvinas (= Falkland) Islands is probably a species of Mnemiopsis (O’Sullivan, 1986)`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfish/mnemiopsisLeidyi/mnemiopsis-leidyi.jpg`
    },
    ocyropsisCrystallina: {
        id: 12,
        name: `Ocyropsis crystallina`,
        description: `Body laterally compressed. Oral lobes large. Comb rows short, ciliated plates few in number. Four subtentacular rows only about two-thirds as long as 4 substomodeal ones. Stomodeum flat; its broad side constricted near middle.`,
        color: `milky translucent.`,
        length: `Length up to 45 mm.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfish/ocyropsisCrystallina/ocyropsis-crystallina.jpeg`
    },
    ocyropsisMaculata: {
        id: 13,
        name: `Ocyropsis maculata`,
        description: `Similar to Ocyropsis crystallina. Four conspicuous brown spots on large, prominent oral lobes. Body compressed`,
        color: `Color of lobes whitish, translucent.`,
        size: `Length up to 100 mm.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfish/ocyropsisMaculata/ocyropsis-maculata.png`
    }
};

module.exports = animals