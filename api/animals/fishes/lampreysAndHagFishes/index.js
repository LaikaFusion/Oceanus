const baseURL = require('../../../baseURL');

const animals = {
    arcticLamprey: {
        id: 1,
        name: `Arctic lamprey (Lethenteron japonicum)`,
        description: `in addition to the characteristics given in the key, the average diameter of the sucking-disc (sexes combined) is equal to 62.5% of the branchial region and 6.1% of the total length. The number of trunk myomeres ranges from 65 to 73`,
        size: `the maximum length obtained is 625 mm, while the common lengths of metamorphosed specimens in different areas vary from 130 to 460 mm`,
        habitat: `it is typically an anadromous species but in some areas of North America and Asia there are present land-locked populations. Berg (1931a) recognized three forms of L. japonicum, which differ, in addition to their distribution, by their sizes. The largest form is found along the Pacific coasts. The lack of comparative material prevents our further consideration of these forms.`,
        food: `all populations of L. japonicum parasitize different types of fish in salt- and freshwater habitats.`,
        reproduction: `the number of eggs varies according to the size of the female from 80,000 to 107,000. The egg diameter is approximately 1 mm.`,
        distribution: `in the area, from East Finnmark (River Pasvik) through the Barents Sea to Novaya Zemlya. In the White and Barents Seas, it is taken commercially. Abundant in the Arctic Ocean, along the Siberian coast, eastward to Kamchatka and the Bering Sea, south to Japan and Korea. On the North American mainland from the Kenai Peninsula, east along the Arctic Ocean drainages as far as the Anderson River. Formerly very abundant in the Yukon River and up the Mackenzie River to the Great Slave and Artillery Lakes and to Fort Smith on the Slave River. In addition to parasitic L. japonicum in North America and Asia there are found several non-parasitic (satellite) species belonging to the same genus (Vladykov & Kott, 1978).`,
        img: `${baseURL}/img/fishes/img/lampreysAndHagfishes/arcticLamprey/arctic-lamprey.jpg`
    },
    hagfish: {
        id: 2,
        name: `Hagfish (Myxine glutinosa)`,
        description: `24-33 pairs of slime pores in front of the gill openings, 51-70 between the gill openings and the anus, and 10-13 posterior to the anus, giving a total count of 88-102 slime pores. Total cusp count of teeth 32-36 (Fig. B). Usually six pairs of internal gill pouches.`,
        size: `in the eastern Atlantic lengths were reported to be between 600 and 790 mm. Anatomical details are given by Marinelli & Strenger (1956), and systematical information is given by Fernholm (1981).`,
        habitat: `littoral to meso-abyssal (20-600 m) on muddy bottom. In Norwegian fjords reported to occur to 1,100 m.`,
        reproduction: `eggs are few in number (19-30) and large (20-25 mm), the horny shell has a cluster of anchor-tipped filaments at each end`,
        distribution: `Mediterranean Sea around African coast (Dieuzeide, 1956), absent in eastern Mediterranean and Black Seas; Atlantic coast from Portugal to the North Sea, Skagerrak, Kattegat and Varanger Fjord; from Davis Strait to Florida (unpublished). Abundant in many areas.`,
        img: `${baseURL}/img/fishes/img/lampreysAndHagfishes/hagfish/hagfish.jpg`
    },
    riverLamprey: {
        id: 3,
        name: `River lamprey (Lampetra fluviatilis)`,
        description: `in addition to the characteristics given in the key, the average diameter of the sucking-disc (sexes combined) is equal to 56.6% of the branchial region and 5.6% of the total length. The number of trunk myomeres ranges from 58 to 66.`,
        size: `the maximum length obtained is 450 mm, while the average length is between 310 and 340 mm. For anatomical details consult Marinelli (1954)`,
        habitat: `found in fresh- and saltwater areas. There are two forms, one migratory which is large and another small sedentary form.`,
        food: `parasitic on many different types of fish.`,
        reproduction: `the number of eggs varies with the size of the female from 4,000 to 40,000. The egg diameter is approximately 1 mm.`,
        distribution: ` in the area, coastal waters and rivers of north-western Mediterranean Sea, along European Atlantic coast, North Sea and the whole of Baltic Sea; absent from Black, Caspian and Polar Seas. In the Baltic Sea area it is an important economic species, with yearly catches between 1 and 2 million individuals. In the freshwater areas of western Europe are found 2 additional non-parasitic or satellite species of Lampetra. For further details on lamprey satellite species see Vladykov & Kott (1979a).`,
        img: `${baseURL}/img/fishes/img/lampreysAndHagfishes/riverLamprey/river-lamprey.png`
    },
    seaLamprey: {
        id: 4,
        name: `Sea lamprey (Petromyzon marinus)`,
        description: `in addition to the characteristics given in the key, a very large sucking-disc in both sexes with an average diameter equal to at least 70% of the branchial region and 7.5-10% of the total lamprey length. In immature specimens the dorsal fins are widely separated, but are close together in spawning individuals. This species has 67-74 trunk myomeres. Spawning males, in addition to a relatively long urogenital papilla, have a large rope-like ridge extending along the back from the head to the first dorsal fin. In mature females of this and other holarctic species of lampreys the urogenital papilla is also present but it is much shorter and barely visible from the outside; in addition spawning females of all lampreys have a well-developed anal fin-like fold.`,
        size: `up to 1,200 mm, it is the largest species among lampreys.`,
        habitat: `typically an anadromous species but in some lakes of eastern North America there are present several land-locked populations. In the sea, littoral to meso-abyssal.`,
        food: `highly parasitic species, feeding on a variety of fish and marine mammals: Balaenoptera (Japha, 1910) and Phocoena phocoena (van Utrecht, 1969).`,
        reproduction: `spawning occurs mainly in June and July in running freshwater, brooks or rivers; females deposit numerous (up to 258,874), small (less than 1 mm in diameter) eggs in nests exclusively built by males. Duration of the ammocoete stage in the case of land-locked P. marinus can be very extensive, reported to be 18 or more years (Manion & Smith, 1978) prior to metamorphosis.`,
        distribution: `from northern Africa throughout the western Mediterranean Sea, although absent in eastern Mediterranean and Black Seas; in the North Atlantic from Portugal to the North and Baltic Seas, except the Gulf of Bothnia; along the Norwegian coast to Barents Sea; from Iceland and Labrador to Florida and the northern shore of the Gulf of Mexico (Vladykov & Kott (1980))`,
        img: `${baseURL}/img/fishes/img/lampreysAndHagfishes/seaLamprey/sea-lamprey.jpg`
    },
    whiteHeadedHagfish: {
        id: 5,
        name: `White-headed hagfish (Myxine ios)`,
        description: `28-36 pairs of slime pores in front of the gill openings, 63-73 between the gill openings and the anus, and 9-13 posterior to the anus, giving a total count of 103-117. Total cusp count of teeth 44-51. Usually seven pairs of internal gill pouches.`,
        color: ` specimens from off Ireland with a whitish head.`,
        size: `to 49 cm`,
        habitat: `bathyal or abyssal between 950 and 1,600 m on muddy bottom. Food: see family.`,
        reproduction: `few and large (20-30 mm) eggs`,
        distribution: `west of Ireland (unpublished). Outside the area, off West Africa between latitiudes 21 and 26° N.`,
        img: `${baseURL}/img/fishes/img/lampreysAndHagfishes/whiteHeadedHagfish/white-headed-hagfish.png`
    }
};

module.exports = animals;