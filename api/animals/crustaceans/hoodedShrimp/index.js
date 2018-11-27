const animals = {
    bodotriaArenosa: {
        name: `Bodotria arenosa`,
        description: `Carapace with median and lateral carinae much as in Bodotria scorpioides, which it resembles in most respects, the major difference being that the endopod of the uropod has only one segment. The first pereionite is not visible from above, the second long. Only the first pereiopods bearing exopodites in either sex. Pereiopod 2 with the basis and ischium not distinctly separated. No free telson.`,
        size: `Length up to 7 mm.`,
        ecology: `Generally inhabits rather coarser sand than Bodotria scorpioides. `,
        depthRange: `Down to about 120 m.`,
        distributionInTheNorthSea: `Recorded from SW Norway to Brittany.`,
        worldDistribution: `SW Norway to Brittany.`
    },
    bodotriaPulchella: {
        name: `Bodotria pulchella`,
        description: `The first pereionite not visible from above, the second long. Only the first pereiopods bearing exopodites in either sex. Pereiopod 2 with the basis and ischium not distinctly separated. Carapace with a median and two pairs of lateral carinae, the lower one meeting the upper near the hind end. Only the median carina is visible on the pleon somites. The basis of pereiopod 2 has a number of recurved spines on the upper edge. The endopod of the uropod has two segments. No free telson.`,
        size: `Length of the male up to 3.2 mm, of female up to 2.5 mm.`,
        ecology: `Recorded from shallow water.`,
        depthRange: `Down to 70 m.`,
        distributionInTheNorthSea: `Southern and northern North Sea, Skagerrak, also Kattegat.`,
        worldDistribution: `Recorded from west coast of Britain, Mediterranean Sea and Sénégal.`
    },
    bodotriaScorpioides: {
        name: `Bodotria scorpioides`,
        description: `The first pereionite not visible from above, the second long. Only the first pereiopods bearing exopodites in either sex. Pereiopod 2 with the basis and ischium not distinctly separated. Carapace with a longitudinal median carinae and a pair of lateral carinea continued to the end of pereionite 5 and visible on the first five pleonites, especially in the male. The endopod of the uropod has two segments, the distal much the shorter. No free telson.`,
        size: `Length up to 7 mm.`,
        ecology: `Generally inhabits rather coarser sand than Bodotria scorpioides.`,
        depthRange: `Down to about 100 m depth, usually much less.`,
        distributionInTheNorthSea: `Southern and northern North Sea, Skagerrak.`,
        worldDistribution: `NW Europe, from Norway to France, Mediterranean Sea and Black Sea, W Africa.`
    },
    brachydiastylisResima: {
        name: `Brachydiastylis resima`,
        description: `Female pseudorostrum long and upturned, with several long plumose setae set around the apex. Anterolateral angle forming a sharp tooth followed by a smaller one and some serrations. Eyelobe barely developed. Frontal lobe with three pairs of denticles. Male pseudorostrum little upturned, with a few small setae at the apex, carapace smooth, anterolateral angle rectangular, without teeth or serrations behind. Telson about two-thirds as long as the uropod peduncles in the female. Endopod of uropod a little more than two-thirds as long as the exopod. Telson present.`,
        size: `Length up to 6 mm.`,
        ecology: `Shelf to bathyal.`,
        depthRange: `Down from 5 to 350 m.`,
        distributionInTheNorthSea: `Northern North Sea, Skagerrak.`,
        worldDistribution: `An Arctic-Boreal species mainly from the upper shelf, recorded from the North Sea northwards to the Arctic and from the north-western Pacific.`
    },
    campylaspisCostata: {
        name: `Campylaspis costata`,
        description: `Carapace with dorsal outline arched in the female, less so in the male, sides sculptured with three pairs of oblique folds, the hindermost bifurcating so that a fourth fold nearly reaches the hind margin and then turns forward to rejoin the third near the mid-line. Eye distinct, with lenses. Pereionites 1 and 2 produced dorsally, each with a median point. Pereionite 5 and pleonites 1-4 each with a pair of dorsolateral tubercles. Dactyl of pereiopod 2 not longer than the carpus and propodus combined. No free telson.`,
        colour: `In life reddish-brown.`,
        size: `Length up to 6.5 mm.`,
        ecology: `Boreal, found on muddy sand and mud.`,
        depthRange: `Down from 40 to 500 m (once from 1500 m in North-West Atlantic).`,
        distributionInTheNorthSea: `Northern North Sea, Skagerrak.`,
        worldDistribution: `An Arctic-Boreal species mainly from the upper shelf, recorded from the North Sea northwards to the Arctic and from the north-western Pacific.`
    },
    campylaspisGlabra: {
        name: `Campylaspis glabra`,
        description: `Similar to Campylaspis rubicunda but smaller as adult and colour when alive whitish sometimes with a tinge of pink. Pereionites 1 and 2 produced dorsally. Dactyl of maxilliped 2 with two or three spines. Dactyl of pereiopod 2 shorter than carpus and propodus combined. No free telson.`,
        size: `Length up to 4 mm.`,
        ecology: `Probably occurs on muddy sand or mud substrates.`,
        depthRange: `Down from 5 to 3000 m.`,
        distributionInTheNorthSea: `Northern North Sea, Skagerrak.`,
        worldDistribution: `Northern Norway to North-West Africa, from the Mediterranean and from the North-West Atlantic, and also doubtfully from South Vietnam.`
    },
    campylaspisHorrida: {
        name: `Campylaspis horrida`,
        description: `Carapace large and tumid, with distinct densely crowded conical protuberances, giving it a very rough appearance. Protuberances especially densely crowded together on the dorsal face, whereas laterally they are arranged in two longitudinal rows, the lower of which forms an almost continuous carina, both series being connected in front by a somewhat irregular transverse prominence continued on the side of the pseudorostral projection, which is rather prominent, subrostral corners small but well defined. No free telson.`,
        colour: `Dark red.`,
        size: `Length up to 7 mm.`,
        ecology: `Is found on a soft muddy bottom.`,
        depthRange: `Down from 200 to 600 m.`,
        distributionInTheNorthSea: `Norway, western Skagerrak.`,
        worldDistribution: `N Atlantic and Arctic Oceans`
    },
    campylaspisRubicunda: {
        name: `Campylaspis rubicunda`,
        description: `Carapace large and inflated, dorsal edge arched in the female, less so in the male, smooth, without antennal notch or anterolateral angle. Pereionites 1 and 2 raised dorsally to form forward curving ridges, each with a median point. Eye distinct, fairly prominent. Maxilliped 2 with four strong spines on the dactyl. Pereiopod 2 with the dactyl slender, longer than the carpus and propodus combined. No free telson.`,
        colour: `Mainly red (in life animals).`,
        size: `Length up to 6 mm.`,
        ecology: `Shelf and slope, on muddy sand.`,
        depthRange: `Down from 10 to 2200 m.`,
        distributionInTheNorthSea: `Southern and northern North Sea, Skagerrak.`,
        worldDistribution: `Arctic Boreal; Irish Sea and northwards on both sides of the North Atlantic, extending into the Arctic, as well as in the north-western Pacific.`
    },
    campylaspisSulcata: {
        name: `Campylaspis sulcata`,
        description: `Carapace well arched dorsally in female, dorsal outline with slight undulations, lateral faces with a fairly deep excavation between two carinae which extend obliquely from near the mid-line in the hinder part of the carapace to the base of the pseudorostrum. The eye is fairly prominent, with lenses. The antennal notch is faintly indicated but there is no anterolateral angle. The first two pereionites are elevated dorsally. Dactyl of maxilliped 2 with four spines. Dactyl of pereiopod 2 only slightly tapered and longer than the carpus and propodus combined. No free telson.`,
        size: `Length up to 5 mm.`,
        ecology: `Deeper shelf and slope.`,
        depthRange: `Down from about 130 to 650 m.`,
        distributionInTheNorthSea: `Northern North Sea, Skagerrak.`,
        worldDistribution: `A Mediterranean-Boreal species. Recorded from the west coast of Ireland and from Norway to the Mediterranean.`
    },
    campylaspisVerrucosa: {
        name: `Campylaspis verrucosa`,
        description: `Female, body rather short and stout, with the anterior division greatly tumefied. Carapace large and swollen, evenly vaulted above, and having the anterior part but slightly excerted, surface uneven owing to scattered nodiform protuberances, which laterally have a tendency to arrange themselves in longitudinal rows Male, much more slender than the female, with the carapace shallower, and scarcely at all vaulted above. Appendages exhibiting the usual transformation. No free telson. This species resembles Campylaspis horrida, but may be readily distinguished by the somewhat different form of the carapace and the less numerous and more obtuse protuberances on its surface. Moreover the stem of the uropods is considerably shorter, and the colour of the body very different.`,
        colour: `Whitish with a faint greenish tinge.`,
        size: `Length: female up to 5.5 mm, male up to 6.5 mm.`,
        ecology: `Deeper shelf and slope on muddy clay.`,
        depthRange: `Down from 100 to 200 m.`,
        distributionInTheNorthSea: `Norway, Skagerrak`,
        worldDistribution: `NW Europe, Mediteranean.`
    },
    cumellaPygmaea: {
        name: `Cumella pygmaea`,
        description: `Female with pseudorostrum short and a well excavated antennal notch with acute anterolateral angle below. The carapace is compressed with the dorsal edge arched and with a carina bearing 8-12 forward pointing teeth in the midline. Eye conspicuous. Peduncle of uropods serrated on inner edge, considerably longer than the endopod which is much longer than the narrower exopod. In the adult male the pseudorostrum is even shorter, the dorsal line is nearly straight and without teeth. The flagellum of antenna 2 reaches only to the third pleon somite. No free telson.`,
        size: `Length up to 3 mm.`,
        ecology: `Shallow water in coarse sands and shelly substrates.`,
        depthRange: `Down to 120 m but usually less than 50 m depth.`,
        distributionInTheNorthSea: `Southern and northern North Sea.`,
        worldDistribution: `Recorded from Norway to the Bay of Biscay and the Mediterranean and Black Sea.`
    },
    cumopsisGoodsiri: {
        name: `Cumopsis goodsiri`,
        description: `Carapace with a pair of lateral ridges on either side in both sexes, but these are sometimes only faintly defined. In the female a pair of semicircular folds may sometimes be seen on the dorsum of pereionite 2. In life patches of purplish brown pigment are often present on the carapace and especially on pleonite 5. Flagellum of antenna 2 reaches beyond the end of the pleon. Female uropods as long as the last three pleonites together; the number of spines on the peduncle and the proximal and distal segments of the inner ramus is variable, none to five, three to nine, and two to six respectively. No free telson.`,
        ecology: `Mainly an intertidal species, burrowing into fine sand from the mid-tide downwards on sheltered beaches but also found subtidally down to a depth of a few metres.`,
        size: `Length of male up to 5 mm, of female up to 6 mm.`,
        depthRange: `Intertidal, to a depth of a few metres.`,
        distributionInTheNorthSea: `Northern and southern North Sea.`,
        worldDistribution: `NE Atlantic, along the coasts of NW Europe, to Morocco as well as in the Mediterranean and Black Sea. Also recorded from the coast of South Vietnam.`
    },
    cyclaspisLongicaudata: {
        name: `Cyclaspis longicaudata`,
        description: `Carapace of female very large and tumid, almost globose in form, and perfectly smooth, with the upper margin boldly vaulted, pseudo-rostral projection distinct, though rather short, sub-rostral incisions well marked; that in adult male much less deep and more evenly vaulted above, pseudo-rostral projection less prominent, antero-lateral corners blunted. First pedigerous segment not visible at all; second segment well developed; the three succeeding ones narrowing abruptly. Tail exceedingly slender and elongate, much longer than the anterior division, all the segments contracted in their anterior part; last segment nearly as long as the preceding one, gradually widening distally, and considerably produced behind. Eye wholly absent. Superior antennae with the sensory filaments of the outer flagellum extremely elongate; those in male with an additional bundle of such filaments at the base of the flagellum. Palp of anterior maxillae with a single apical seta. Second pair of maxillipeds with the basal joint unusually large, lamellar, and coarsely denticulated in the distal part of the outer edge. Third pair of maxillipeds with the basal joint strongly developed being more than twice as long as the succeeding joints combined, and angularly bent in tile middle; terminal expansion very large, reaching beyond the meral joint. First pair of legs exceeding the carapace in length, basal joint large and lamellarly expanded in the middle, terminal part very slender, with the propodal joint the longest; second pair longer than the succeeding pairs, and terminating in four diverging spines. Uropods in female scarcely longer than the last segment, basal part very short and perfectly smooth, rami twice the length of the former and sub-equal, both terminating in a sharp point, the inner one without spines or setae; those in adult male considerably more slender, basal part much longer than in female, and carrying inside seven ciliated bristles, inner ramus armed inside with a dense row of small, ciliated spinules. Telson long, postanal part narrowed, with several pairs of lateral spines.`,
        size: `Length of female reaching to 8 mm of male 7 mm.`,
        colour: `Pure white.`,
        ecology: `It is a true deep-water form, only found in depths of more 200 m.`,
        depthRange: `Down from 200 to 2750 m.`,
        distributionInTheNorthSea: `Spanish coast and in the North Atlantic.`,
        worldDistribution: `N. Atlantic, Mediterranean, Azores.`
    },
    diastylisBradyi: {
        name: `Diastylis bradyi`,
        description: `Very similar to Diastylis laevis but carapace of female with lines of small denticles, chiefly transverse, the male with the pseudorostral line regularly curved and the pseudorostrum acute, with only a single pair of spines apically or none. The posterolateral corners of pereionite 5 with much longer acute prolongations. There is a sternal spine medially on the female pereionite 3. The basis of pereiopod 1 is as long as the remaining segments together and the propodus is much less than twice as long as the dactyl. Telson long, with two end spines, postanal part narrowed, and several pairs of lateral spines.`,
        size: `Length up to 12 mm.`,
        ecology: `It occurs on coarser deposits than Diastylis laevis , usually in shallow water.`,
        depthRange: `Between 0 and 30 m depth.`,
        distributionInTheNorthSea: `Southern North Sea, Skagerrak.`,
        worldDistribution: `This species overlaps the range of Diastylis laevis but extends less far to the south. It has been found from the Skagerrak to the Bay of Biscay and has probably been confused with D. laevis.`
    },
    diastylisCornuta: {
        name: `Diastylis cornuta`,
        description: `Female with numerous strong spines of which one or two pairs are specially large. In the adult male these spines are reduced to two pairs of blunt tubercles, the lower one on either side at the front of a lateral carina, from which an oblique carina extends forwards to the front lower edge of the carapace. The eye is small. Telson long, with two end spines, postanal part narrowed, with 8-10 pairs of lateral spines. The telson is a little shorter than the peduncle of the uropods, with its distal part about as long as the proximal.`,
        size: `Length up to 14 mm.`,
        ecology: `Deeper shelf and slope.`,
        depthRange: `Down to 2700 m.`,
        distributionInTheNorthSea: `Northern North Sea, Skagerrak`,
        worldDistribution: `It occurs from N Norway to the Mediterranean, NE England and off Shetland.`,
        remarks: `It has in some places been confused with the very similar species Diastylis boecki Zimmer, 1930.`
    }
};

module.exports = animals;