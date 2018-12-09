const animals = {
    angulorostrumSegonzaci: {
        id: 1,
        name: `Angulorostrum segonzaci`,
        description: `Length female 1.36-1.42mm, male unknown. Known from two females taken epibenthically, one from the North Portuguese continental slope the other from the Spanish continental slope in the Bay of Biscay from depths of 700-800m.`,
        remarks: `This is one of the fifteen species within the Cypridinidae which are not keyed-out in this program.`
    },
    archiconchoeciaBispicula: {
        id: 2,
        name: `Archiconchoecia bispicula`,
        description: `Dorsal hinge region straight, posterior margin curved. The ventral margin concave, so carapace deeper anteriorly than posteriorly (A. bispicula Habitus 1, A. bispicula Habitus 2, A. bispicula 1, A. bispicula 2). The rostrum small and, in ventral aspect, hidden by the swollen anterior margin of the carapace. The carapace glands open more or less symmetrically on the posterior margin just below where it recurves anteriorly. The frontal organ extends just beyond the end of first antennae; it carries two small spines on its rounded tip (A. bispicula 1, A. bispicula 3). Dorsal seta on second segment of first antenna long and densely spinous towards end (A. bispicula 1, A. bispicula 3).`,
        remarks: `Since Deevey, 1978a unravelled the large number of species previously lumped under A. ventricosa (Archiconchoecia ventricosa), there have been few studies in which this, and other, species have been distinguished. None of the species in the complex has been observed to be abundant.`,
        distribution: `Only known from 17°-53°N in the North Atlantic. A rare benthopelagic/deep mesopelagic species usually taken at 800-1500m. depth 1, 2 (R.R.S. Discovery Map).`,
        specimen: `Holotype, a female dissected on slide. National Museum of Natural History, Smithsonian Institution (NMNH 171285).`,
        locality: `17°18'N, 85°27'W in western Caribbean. Pillsbury cruise 6803, Station 18; date, 22 April 1968; depth, 2000-Om; vertical haul.`
    },
    archiconchoeciaCucullata: {
        id: 3,
        name: `Archiconchoecia cucullata`,
        description: `Carapace of both sexes elongate, height less than half the length (A. cucullata Habitus 1, A. cucullata Habitus 3). Female carapace tapers anteriorly with maximum height at two-thirds the length (A. cucullata Habitus 1). Dorsal and ventral carapace margins almost parallel in male (A. cucullata Habitus 3). The unequal rostra are straight and produced anteriorly, left larger, nearly quarter the carapace length. Both valves with pointed processes on posterior margin. Process on left valve located just below postero-dorsal corner; process on right valve longer and positioned slightly more ventrally. Clear and distinctive sculpturing of parallel striae run in differing directions on dorsal third of carapace to the ventral two-thirds. Striae end in spines along ventral margin from the postero-dorsal spine to about where the ventral edge reaches the point of maximum height. Frontal organ long and thin in both sexes; it is half as long again as the limb of the first antenna (A. cucullata 1, A. cucullata 3).`,
        remarks: `Poulsen, 1969a noted the existence of two size forms; this is confirmed by Discovery Collections material. These different size forms are probably distinct species. Smaller species (A. cucullata Habitus 5) are more abundant and sometimes sub-dominant at deep mesopelagic depths at lower latitudes. Larger sensu stricto form (Brady, 1902 described its length as being 2.5mm) is the more common in UK waters. Sampling at abyssopelagic depths reveals taxonomic uncertainties; at least two further species have been taken. one in UK waters (see A. aff. cucullata (Archiconchoecia aff. cucullata)). The strikingly different carapace morphology and mandibular teeth of these species compared with other Archiconchoecia species may segregate them generically.`,
        distribution: `Occurs in all oceans between 60°N-50°S. 1, 2, 3 (R.R.S. Discovery Map). Where the two forms co-occur, the smaller species has the shallower bathymetric range. In UK waters larger form reasonably abundant at 600-1500m.`,
        specimen: `None designated; status of original material uncertain.`,
        locality: `Original material from three stations close to 52°N 15°W.`
    },
    archiconchoeciaGastrodes: {
        id: 4,
        name: `Archiconchoecia gastrodes`,
        description: `One of the longer species in the genus. In the female, dorsal and ventral margins are almost parallelly curved (A. gastrodes Habitus 1); posterior margin is strongly arched and the anterior region is swollen; in ventral aspect the flanks are almost parallel for half the length, but are bluntly rounded anteriorly and taper to a shape point posteriorly (A. gastrodes Habitus 2). The males are very much shorter and the straight region of the ventral margin is inclined so that the carapace tapers strongly posteriorly (A. gastrodes Habitus 3). In neither sex can the rostrum be seen in ventral aspect (A. gastrodes Habitus 2, A. gastrodes Habitus 4). The right asymmetrical gland opens a third the height up the posterior margin (A. gastrodes Habitus 1, A. gastrodes Habitus 3), below its maximum curve. The left gland opens just below the posterior end of the hinge. The caudal furca carries eight pairs of hook setae.`,
        remarks: `Other than the cucullata group with their strong sculpturing and carapace processes, the only Archiconchoecia species which are as large as this species are A. bifurcata and A. poulseni. It differs from the latter in having eight rather than seven claw setae on the caudal furca, and from the former by the carapace height being less than half the length (in A. bifurcata the height is almost 60% of the length). Deevey, 1978a describes other differences related to the second antenna and the setation of the fifth and sixth limbs. Neither of these similar species have been taken in UK waters.`,
        distribution: `Discovery Collection material includes species taken over bathymetric ranges of 800-2700m from 30-60°N in the North Atlantic. There appears to be an ontogenetic migration with the juveniles occurring at shallower depths than the adults. 1, 2, 3 (R.R.S. Discovery Map).`,
        specimen: `Holotype, a female dissected on a slide in the National Museum of Natural History, Smithsonian Institution (NMNH 171292)`,
        locality: `32°10'N, 64°30'W, Station "S" in the Sargasso Sea off Bermuda; depth 1000-1500m; date 19th February 1979; a vertical tow.`
    },
    archiconchoeciaPilosa: {
        id: 5,
        name: `Archiconchoecia pilosa`,
        description: `Anterior region of carapace swollen; ventral margin slightly rounded, curving smoothly into rounded posterior margin (A. pilosa Habitus). Carapace tapers posteriorly, maximum height just posterior of rostrum. Right asymmetrical gland opens near mid-height on posterior margin, the left gland appears lacking. Striations intercept antero-ventral region below the incisure at an oblique angle. Male frontal organ stem only as long as first podomere of first antenna, capitulum which extends to just beyond end of limb, is slightly bent with rounded end carrying a minute spinule (A. pilosa 3). First antenna of male has five equal terminal setae which are broad and have pointed tips. The hook appendage on the left second antennal endopodite is short, thick and club-like (A. pilosa 4). The caudal furca has eight pairs of claw-setae.`,
        remarks: `Only the male has been described. Its length was given by Deevey as 1.35mm. Specimens taken in the North Atlantic have, tentatively, been ascribed to this species; all have been female around 1.0mm in length and damaged.`,
        distribution: `This is a rare bathypelagic species which is only known from the type locality, but Discovery Collection material contains specimens which fit Deevey's description well from 10°-49°N in the North Atlantic Ocean. 1 (R.R.S. Discovery Map).`,
        specimen: `Holotype, a male dissected on a slide. National Museum of Natural History, Smithsonian Institution (NMNH 171282).`,
        locality: `32°10'N, 64°30'W Station "S" in the Sargasso Sea off Bermuda. Depth 1500-2000m; date 25 June 1969; Vertical tow.`
    },
    archiconchoeciaVentricosa: {
        id: 6,
        name: `Archiconchoecia ventricosa`,
        description: `Marked sexual dimorphism in carapace shape and size (A. ventricosa Habitus 1, A. ventricosa Habitus 3). In male anterior region is domed with dorsal margin tapering strongly posteriorly. Posterior margin curves symmetrically from dorsal to ventral margin. Ventral margin slightly concave. In some specimens a clear pattern of striae intercept antero-ventral margin at right-angles. Female carapace bean-shaped, with the dorsal margin curving almost symmetrically both anteriorly and posteriorly. Ventral margin is slightly concave. In both sexes right asymmetrical gland broad opening just above level of the ventral margin (A. ventricosa Habitus 1, A. ventricosa Habitus 3). Left asymmetrical gland opens just ventrally of posterior end of the hinge. Both sexes slim in ventral aspect, carapace breadth being a third or less than the length. Flanks curve almost symmetrically (A. ventricosa Habitus 2, A. ventricosa Habitus 4). The frontal organ in North Eastern Atlantic specimens just longer than limb of the first antenna (A. ventricosa 1, A. ventricosa 3); sometimes terminating in a long tapering point. First antennae bent so spinous seta on the end of the second segment appears to be almost terminal. Sensory setae broad, thin-walled and recurved. A characteristic feature is the unusual length of one of the terminal setae of the sixth limb; it is double the length of the other terminal setae and almost equal to whole limb. The caudal furca carries seven pairs of hook setae.`,
        remarks: `Müller, 1906 originally described the species. Poulsen, 1969a later attributed the much larger specimens in the Dana Collections to it, but Deevey, 1978a placed them in a new species A. poulseni , designating Poulsen's account as the type description The form occurring in U.K. waters is a little larger than the type description, and so may turn out to be yet another sibling`,
        distribution: `Widespread, but never common, in the Indian and Atlantic Oceans (0°-49°N) 1 (R.R.S. Discovery Map).`,
        specimen: `None designated; status of original material uncertain.`,
        locality: `The original material was collected in both the Equatorial Atlantic and Indian Oceans (2°-7°N).`
    },
    archiconchoeciaVersicula: {
        id: 7,
        name: `Archiconchoecia versicula`,
        description: `Small subrectangular species (A. versicula Habitus 1, A. versicula Habitus 3). Dorsal and ventral margins almost parallel before curving symmetrically to form the posterior margin. Rostrum down-turned in both sexes. In ventral aspect, the maximum width is level with the insertions of the adductor muscles and carapace tapers both anteriorly and posteriorly (A. versicula Habitus 2, A. versicula Habitus 4). Clear sculpturing of fine striae parallel the ventral edge, are vertical round the sides of the rostrum, but are obliquely longitudinal along the dorsal margin. Right asymmetrical gland opening two-fifths the way down the posterior margin, and the left one-fifth. The frontal organ is unsegmented in both sexes, curves slightly downwards and usually terminates in a fine point which may have secondary spinules at its tip (A. versicula 1, A. versicula 3). First antennae with long reflexed sensory setae. Second antenna endopodite of both sexes with long hirsute "a" and "b" setae (A. versicula 2, A. versicula 4). The caudal furca has six pairs of rather straight spine setae.`,
        remarks: `Together with A. striata , this species forms a separate species grouping which possibly merits generic status. Its description, from material collected in the Pacific sector of the Southern Ocean, and subsequent identification from deep water in the Atlantic, suggests that there is a widespread faunistic link between the abyssopelagic waters of all the oceans.`,
        distribution: `Described from the Southern Ocean; taken from the equator to 49°N in the North Atlantic, whenever sampling has been carried out at depths greater than 2000-2500m. 1 (R.R.S. Discovery Map).`,
        specimen: `Holotype, a male dissected on slides. National Museum of Natural History, Smithsonian Institution (NMNH 169061)`,
        locality: `39°56'S, 107°24'W, Eltanin sample 1375; depth 1000-2000m; date 10th December 1965; gear a Bébathypelagic plankton sampler.`
    },
    archiconchoeciaAffCucullata: {
        id: 8,
        name: `Archiconchoecia aff. cucullata`,
        description: `The general appearance of this species is superficially similar to that of A. cucullata (A. aff. cucullata Habitus 1, A. aff. cucullata Habitus 3). However, rostral edges are not straight, but are curled downwards and inwards (A. aff. cucullata Habitus 2, A. aff. cucullata Habitus 4). The posterior spines are positioned slightly lower on the posterior margin and their bases overlap. Between the end of the hinge and the righthand process the postero-dorsal margin is smooth. The maximum width of the carapace is anterior to mid-length so in ventral aspect it appears spindle-like. The frontal organ is <150% the length of the limb of the first antenna and is down-turned at its tip (A. aff. cucullata 1, A. aff. cucullata 3).`,
        remarks: `This is fragile species, like many other deep-living species, it is difficult to collect in good condition. Another large cucullata - like species has been taken in benthopelagic hauls at depths >4000m at low latitudes in the North Atlantic. These four species will be separated generically from Archiconchoecia species. The name Archiconchoecia should be retained for those species which resemble A. striata , the first species described for the genus, which should be designated the type species for the genus.`,
        distribution: `This 'new' abyssopelagic species requires formal description. It occurs at 20°N-49°N in deep water in the Atlantic. 1 (R.R.S. Discovery Map).`
    },
    asteropeAbyssicola: {
        id: 9,
        name: `Asterope abyssicola`,
        description: `Length female 1.63mm, male unknown. Described from off the Lofoten Islands from a depth of 220m and off Bear Island at 345m.`,
        remarks: `This is one of the fifteen species within the Cypridinidae which are superficially keyed-out in this program.`
    },
    azygocypridinaImperialis: {
        id: 10,
        name: `Azygocypridina imperialis`,
        description: `Length female 9.5mm, male 7.3mm. Caught in quite large numbers at depths of 1900-3000m in the Northeastern Atlantic (Athersuch, 1980) in epibenthic sledge samples. This is a large conspicuous yellow-orange species associated with regions of foraminiferal ooze.`,
        remarks: `This is one of the fifteen species within the Cypridinidae which are superficially keyed-out in this program.`
    },
    bathyconchoeciaDarcythompsoni: {
        id: 11,
        name: `Bathyconchoecia darcythompsoni`,
        description: `Carapace long with height about 45% of length. Male rostrum bifid (B. darcythompsoni Habitus 3) - a unique character - but complete in the female (B. darcythompsoni Habitus 2). Dorsal margin straight with posterior corner of right valve developed into a small blunt spine (B. darcythompsoni 4). Left valve right-angled at postero-dorsal corner. Carapace glands open symmetrically in slits in the posterior margin of each valve just below the dorsal corner (B. darcythompsoni 4). Ventral margin parallels dorsal margin, then curves smoothly into the incisure and into the posterior margin. Female, there is a hollow at mid-length of dorsal surface, to rear of shoulder vaults. Any sculpturing is obscure, but in some specimens striae can be seen intercepting anterior margin obliquely below the incisure. Pitting occurs on the rostra and along flanks below incisure. In fresh material there are patches of reddish coloration in the anterior region below the incisure, and around the postero-ventral corner (B. darcythompsoni Habitus 3). Endopodite of second antenna with hirsute "a" and "b" setae, the former with short hairs, the latter with long. Male, hook appendage carrying three long setae on its basal shank, indicating that the appendage is derived from a modified segment (B. darcythompsoni 6). Fifth limb carries a long dorsal seta not extending beyond the end of limb on first podomere. Male sixth limb with one (of three) terminal setae very long. Caudal furca with eight pairs of claw setae.`,
        remarks: `Originally described by Scott, 1909 as a Euconchoecia species. Deevey (1968) erected the genus Bathyconchoecia to accommodate this and six other species which she described from stomach contents of benthic fishes.`,
        distribution: `Gulf of Guinea (Poulsen, 1969b) and off the Azores (Poulsen, 1972). Discovery Collections material includes specimens from 4000m off N. W. Africa and the Porcupine Seabight region off S. W. Ireland.`,
        specimen: `None designated; status of original material uncertain.`,
        locality: `Original material came from the Goldseeker station 53; 59°36'N, 7°W; date August 1907; depth 1140m; two males, one female and two juveniles.`
    },
    bathyconchoeciaKornickeri: {
        id: 12,
        name: `Bathyconchoecia kornickeri`,
        description: `Only the male has been fully described previously. The carapace tapers posteriorly (B. kornickeri Habitus 1, B. kornickeri Habitus 3). Dorsal surface with central hollow at about midlength. Carapace glands situated symmetrically in slots on either side of postero-dorsal corner. The ventral margin curves smoothly from beneath the incisure through to postero-dorsal corner. Sculpture strikingly punctate over entire surface especially on and beneath the rostrum: along the anterior margin striae merge to form irregular polygonal cells (B. kornickeri 3). A flange of sculpture fringes the posterior margin. In ventral view, flanks curve smoothly from tips of rostra to posterior margin; maximum width anterior to midpoint. Frontal organ absent. The first antenna with about five segments and a hirsute dorsal seta, one long and three medium length thick-walled setae in addition to ca. 250 thin-walled setae on ventral pad (B. kornickeri 1, B. kornickeri 4). Second antenna endopodite with unequally long "a" and "b" seta on elongate first podomere. The righthand hook appendage powerfully developed with three setae inserted at the end of its shank (B. kornickeri 5). The lefthand hook appendage is reduced to just a shank. The sixth limb with three terminal setae longer than the limb itself. The type specimen had lost its caudal furca.`,
        remarks: `Original material is in a poor state.`,
        distribution: `Apart from the type locality, this species has only been taken in the N. E. Atlantic, always in nets fished very close to the sea-bed at abyssal depths. 1 (R.R.S. Discovery Map).`,
        specimen: `Holotype male dissected on slide deposited in the Smithsonian Institution (USNM 123214).`,
        locality: `28°15'N 87°02'W from the intestine of a bottom fish, Dicromita agassizii, taken in a midwater trawl which hit the sea-bed at a depth of 1000m, 11 July 1966.`
    },
    bathyconchoeciaNodosa: {
        id: 13,
        name: `Bathyconchoecia nodosa`,
        description: `Carapace short, height 60% of length. Dorsal margin straight. Rostrum large, broad, blunt and down-turned, its tip reaching to below mid-height (B. nodosa Habitus 1). Ventral margin curves smoothly both anteriorly to incisure, and posteriorly to join posterior margin. Postero-dorsal corners of both valves developed into rounded processes at the end of which open the carapace glands. The process on the right valve is the larger. The valves covered with a sculpture of irregular polygons filled with small pits. In ventral view, the rostra clearly seen tapering anteriorly almost from the midpoint. Frontal organ absent. The first antenna with a long dorsal seta, two long and one shorter terminal setae and a ventral cluster of about 200 fine setae mounted on a ventral pad. The caudal furca with seven claw setae.`,
        remarks: `The shape of this species is distinctive. The numbers of known Bathyconchoecia species is increasing rapidly as the techniques for sampling close to the sea-bed at great depth are developed. At present there are over twenty known species, but it seems likely that this species together with several of the other Müller forms will eventually be separated off.`,
        distribution: `Originally described from the vicinity of the Azores, it has now been identified from samples collected off N. W. Africa and the Porcupine Seabight region. 1 (R.R.S. Discovery Map).`,
        specimen: `Holotype deposited in the Zoological Museum of Copenhagen.`,
        locality: `37°00'N 25°45'W off Azores; depth 2400-2450m; date 8 July 1969; gear net mounted on the French Bathyscaph Archimede.`
    },
    conchoeciaAcuticosta: {
        id: 14,
        name: `Conchoecia acuticosta`,
        description: `Carapace shape globular (C. acuticosta Habitus 1, C. acuticosta Habitus 3); typical of Müller's (Müller, 1906) curta group, and Claus' genus Mikroconchoecia (= Microconchoecia sensu Poulsen, 1973). Size >1mm with a concentric pattern of sculpturing and a secondary pattern of rectangles and polygons. The asymmetrical gland on the right valve opens at the postero-dorsal corner. The sensory setae on the first antenna of both sexes are bifid (C. acuticosta 1, C. acuticosta 3). Male first antenna "e" seta armature is a row of 12-14 small spines (C. acuticosta 4).`,
        remarks: `This is one of the larger of the curta group of species. It is readily distinguished from the other large species in the group, C. stigmatica (Conchoecia stigmatica) by the position of the opening of the right asymmetrical gland, and the lack of anterior taper.`,
        distribution: `In the North Atlantic, it is most abundant at higher latitudes at mesopelagic depths 200-500m. It also occurs in equatorial regions; this rather curious biogeographical distribution raises doubts as to whether all these records are conspecific. 1, 2, 3 (R.R.S. Discovery Map).`,
        specimen: `None designated; status of original material uncertain.`,
        locality: `Original material from between 4°N and 35°S in both Atlantic and Indian Oceans.`
    },
    conchoeciaAcutimarginata: {
        id: 15,
        name: `Conchoecia acutimarginata`,
        description: `Carapace large with well developed sharp-edged shoulder vaults (C. acutimarginata Habitus 1, C. acutimarginata Habitus 3). There is a slight anterior taper. Postero-dorsal corner angle slightly greater than 90 and bare. Sculpture a series of rectangles arranged in parallel rows in the anterior region and along the tops of the rostra. Left asymmetrical gland opens just anterior to the posterior end of the hinge; right asymmetrical gland about one third-height up the posterior margin. A supplementary group of glands alongside the right asymmetrical gland. Female, first antenna with long dorsal seta, podomeres covered in fine hairs (C. acutimarginata 1). Frontal organ over double length of first antenna; capitulum sinuately pointed, dorsally with long spinules on basal half, and over most of ventral region (C. acutimarginata 2). Male, first antenna "e" seta armature a double row of 30-34 long pointed spines (C. acutimarginata 6). Second antenna endopodite, the "b" seta with central large tuft of hairs (C. acutimarginata 7). Righthand hook appendage long and recurved with a swollen ridged end.`,
        remarks: `This species' occurrence in the North Atlantic implies a global uniformity in the faunistic composition of the abyssopelagic ostracod assemblages.`,
        distribution: `Known from abyssopelagic depths in the North Pacific and North Atlantic, 20°-49°N. Rarity in collections possibly the result of under collection of the depths >2500m where it lives. 1 (R.R.S. Discovery Map).`,
        specimen: `Holotype male No 1530 Instituta Okeanologii A.N. USSR`,
        locality: `43°47'N 149°56'E, Kuril-Kamchatka Trench, North Pacific; Vityaz Station 5631; date 2nd September 1966; depth 2390m.`
    },
    conchoeciaAmetra: {
        id: 16,
        name: `Conchoecia ametra`,
        description: `A large species with sculptured pattern of rectangular cells covering carapace. Each rostrum drawn out into a pointed process which is longer on the left (C. ametra Habitus 2, C. ametra Habitus 4). Postero-dorsal corner with spines on both valves, again left corner spine longer than right. Carapace produced into small processes at posteroventral corners. Male first antenna "e" seta with armature of 35-40 long flanged spines (C. ametra 4). Hook appendage on the left second antennal endopodite forms a right-angle, whereas the right is strongly re-curved (C. ametra 5). Red when alive. A characteristic species.`,
        remarks: `The only species that might be confused with C. ametra is C. imbricata (Conchoecia imbricata). They are readily distinguished on size, the longer and more symmetrical rostral processes and the longer process at the postero-ventral corner in C. imbricata. It was placed in the imbricata group by Müller, 1906. Poulsen, 1973 attributed it to Claus' genus Conchoecissa`,
        distribution: `Widely distributed in all the major oceans. Its poleward limit 62°N 44°S seems to be related to the polar fronts in the various oceans. Its bathymetric range is 700-1500m in the North Atlantic i.e., deep mesopelagic/shallow bathypelagic. 1, 2, 3, 4 (R.R.S. Discovery Map).`,
        locality: `Original description based on material from several Atlantic and Indian Ocean stations between 31°N and 37°S.`
    }
};

module.exports = animals;