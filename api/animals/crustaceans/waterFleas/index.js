
const animals = {
    bosminaLongispina: {
        id: 1,
        name: `Bosmina longispina`,
        description: `Female carapace relatively narrow in lateral view, dorsal part never strongly humped; largest dorso-ventral width at, or above middle of the body, dorso- frontal curve of carapace convex, never concave. Carapace always with spine (mucro), that is sometimes reduced to  only a backwards protruding corner of the carapace [B.longispina f. maritima-f]. Rostrum usually short and blunt, however, sometimes rather long. Frontal part of the head before the eye sometimes strongly humped; eyes usually large. Antennulae short to moderately long, last segment with 5-22 incisures; antennulae mostly weakly curved, sometimes almost projecting downwards, rarely weakly S-curved. [Antenna not depicted]. Male carapace with low, narrowing dorsal side; short, rarely long mucro (carapace spine) [B.longispina f. maritima-m]. Frontal part of the head humped; antennulae weakly curved. Base of furcal claw [fc] armed with usually eight, rarely six equally sized teeth (characteristic for males of the forma maritima). [Antenna not depicted].`,
        color: `Colourless and completely transparent in clear waters, otherwise yellowish.`,
        ecology: `Optimal salinity range 2.5-5.3 ä, maximum salinity 8-10ä. Occurs in the plankton from May till November.`,
        size: `Female 0.4-1.2 mm; male 0.4-0.66 mm.`,
        depthRange: `Surface to 5 m.`,
        distribution: `B. longispina forma maritima is endemic in the Baltic Sea, but occurs also in the Kattegat and rarely in the southern Skagerrak. B. longispina is distributed in the northern and middle holarctic, and inhabits oligotrophic and mesotrophic freshwater lakes etc., but also occurs in the marine littoral. The species contains various formae of which f. maritima is especially flourishing in the oligohaline parts of the Baltic.`,
        remarks: `B. longispina is a very variable species, with numerous local races that have no systematic importance. However, the various forms are dived into two major groups: an arctic-subarctic group and an alpine group; the present f. maritima belongs to the first group (Flößner, 1972).According to Costello and Emblow, 2000, the present f. maritima P.E. Müller, 1867 is recognised as a subspecies of Bosmina coregoni Baird, 1857. The apparent very similar species B. longispina and B. coregoni differ in the length of the antennula: almost half as long as the body in longispina and more than half as long as the body in coregioni. In maritima a mucro is always present, though sometimes reduced to a protruding corner of the carapace. In coregoni the mucro is more variable, either a long spine, or a pointed corner of the carapace (Flößner, 1972).`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/waterFleas/bosminaLongispina/bosmina-longispina.jpg`
    },
    evadneNordmanni: {
        id: 2,
        name: `Evadne nordmanni`,
        description: `Female in lateral view oval (North Sea form) or triangular (Baltic form). Brood pouch narrowing posteriorly, pointed or more or less rounded, with a short spine (mucro) [E.nordmanni-f ]. Head small compared to body, anteriorly rounded regularly, near the antennulae faintly convex. Compound eye large, but by far not occupying the forehead. Antennulae very small, fused at the base; pointed in lateral view, rounded distally and bearing 3-4 sensory papillae. Legs rather short, the first leg not elongated. Exopodite of leg 1 long and narrow, with two long distal setae. Endopodite of leg 1 consisting of three segments, the first segment long, with four setae; the second and third segments with one or two long curved setae respectively. Propodites of legs 2-3 having a well developed maxillary extension [me] that bears a small and a large distal tooth [E.spinifera-app]. Distal segment of endopodites of leg 2-3 with four setae. Exopodite of leg 3 with only one setae. Leg 4 very short, not well segmented, with four small distal bristles; the exopodite bears one seta. The postabdomen is very short and bifurcated; the caudal peduncle is rudimentary. Up to 7-8 embryos in the brood pouch (North Sea specimens). Male carapace triangular in lateral view, separated from the head with a dorsal depression [E.nordmanni-m]. Compared to the female, the head and eyes are larger, and the lower edge is curved more sharply. The distal segment of the endopodite of leg 1 has a strong, inwardly curved hook [h] [E.spinifera-app ]. The copulatory organ is cylindrical, distally with longitudinal grooves.`,
        color: `grey to bright yellow, occasionally brownish or bright blue-green; very transparent.`,
        ecology: `E. nordmanni is a neritic, eurytherm and euryhaline species, and prefers coastal waters. Oceanic occurrence during summer, as a sign of coastal currents. Salinity range 1.33-37.75 ä; temperature range 1-25°C.`,
        size: `Female 0.53-1.5 mm; male ca. 1 mm (including the posterior spine on the carapace).`,
        depthRange: `Surface.`,
        distribution: `Northern North Sea, Wadden Sea, Skagerrak, also Kattegat and Baltic. Present in the pelagic during the whole year, but in low densities during the winter. World-wide, including subpolar waters; but preferring temperate waters. Regarding the NE Atlantic: all European coasts, north as Iceland, North Cape, Barentsz Sea and Kara sea; Mediterranean, Black Sea.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/waterFleas/evadneNordmanni/evadne-nordmanni.jpg`
    },
    evadneSpinifera: {
        id: 3,
        name: `Evadne spinifera`,
        description: `Female egg-shaped in lateral view; brood pouch with a large, marked spine (mucro) [E.spinifera-f]. Antennulae clearly separated from the lower side of the head, lower distal side almost perpendicularly curved upwards. Legs rather short, the first leg not elongated. The exopodite of leg 1 long and narrow with two long distal setae. The endopodite of leg 1 consists of three segments, the first segment long, with four setae; the second and third segments with one or two long curved setae respectively. Distal segment of endopodites of legs 2 and 3 with four setae. Exopodite of leg 3 with two setae [E.spinifera-app ]. Leg 4 very short, not well segmented, with four small distal bristles; the exopodite bears one seta. Caudal peduncle [cp] well developed (longer than in E. nordmanni). Brood pouch with 6-7 parthogenetic eggs. Male carapace narrowing and pointed strongly in lateral view, however, without marked spine [E.spinifera-m]. Last segment of endopodite of leg 1 with a small hook [E.spinifera-app ].`,
        color: `bright grey to bright yellow, opaque.`,
        ecology: `Evadne spinifera is a thermophilic, somewhat euryhaline oceanic species; preferring warmer waters, and is most abundant between 14 and 18°C. Temperature range 3-28°C; salinity range 5.51-37ä. Swarming occurs in the North Sea from about May to September.`,
        size: `Female 0.9-1.35 mm; male ca. 1.1 mm (including distal spine of carapace).`,
        depthRange: `Surface to 2000 m.`,
        distribution: `Northern North Sea, might occur in the southern North Sea, Wadden Sea, Skagerrak, also in the Kattegat; absent from the Baltic Sea except for the most western part. World-wide, absent from (sub)polar waters. Regarding the NE Atlantic: from Faeroer to Mediterranean, also Black Sea.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/waterFleas/evadneSpinifera/evadne-spinifera.jpg`
    },
    evadneTergestina: {
        id: 4,
        name: `Evadne tergestina`,
        description: `Body stout, oval in shape, without terminal spine. Head with a large eye and the antenna behind (cut-off in the right drawing). Antennal exopodite four-segmented, with 0, 1, 1, and 4 swimming setae respectively. Exopodites of legs 1-4 with 2, 3, 3, and 1 setae [E.tergestina ].`,
        size: `Females 1.0 mm; males 0.8 mm.`,
        depthRange: `Epipelagic.`,
        distribution: `Southern species, reported from the southern North Sea. Coastal waters of the tropical oceans and warm, temperate regions generally between 45°N and 35°S.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/waterFleas/evadneTergestina/evadne-tergestina.jpg`
    },
    peniliaAvirostris: {
        id: 5,       
        name : `Penilia avirostris`,       
        description: `Free edges of carapace spined, the inferio- posterior angle of carapace bears a larger spine [s] [P.avirostris-f/m ]. Six pairs of legs, the most posterior reduced. Antenna projected forward. Adult copulatory organs longer than the postabdomen. Female head with prominent rostral point; antennulae small and runcated. Male head rounded; antennulae [a1 as long as carapace. Male first leg with a strong distal hook.`,
        size: `Female 0.5-1.2 mm; males 0.7-0.9 mm.`,
        depthRange: `Epipelagic.`,
        ecology: `Coastal water species, rare in open oceans. Filter feeder on bacterio- and phytoplankton.`,
        distribution: `Southern North Sea, German Bight, Kattegat. Coastal waters of the tropical and subtropical oceans and warm, temperate regions.`,
        remarks: `P. avirostris has been reported from the North Sea as north as 52°N. The species has been found off Helgoland (ca. 54°N) since 1990 regularly.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/waterFleas/peniliaAvirostris/penilia-avirostris.png`
    },
    podonIntermedius: {
        id: 6,
        name: `Podon intermedius`,
        description: `Female brood pouch large, semi-oval. Head rather short and rounded frontally, convex near the antennulae. The eyes are large. Antenna with exopodite bearing seven, and endopodite bearing six, long and densely haired setae. Exopodite of leg 1 with two long setae of unequal length and with a short spine at the caudal edge [P.intermedius-app]. Endopodite of leg 1 with first segment bearing four short, and two long setae, of which the distal one is coarse and very long; both distal segments are short and bear two long setae each. [P.intermedius-f ]. Leg 4 is rudimentary, the exopodite has one seta. The post-abdomen is very short; the caudal end is of moderate length, with short hairs at the edges. The postabdominal setae are more than twice in length than the peduncle on which they are situated, the peduncle does not reach the end of the post-abdomen. Normally 2-5 embryos in the brood pouch. Male somewhat smaller than the female; carapace sack-shaped and triangular [P.intermedius-m]. The endopodite of leg 1 with distal segment bearing a small claw. Copulatory organ with a blunt point.`,
        color: `white to bright yellow, transparent; darkening with age.`,
        ecology: `P. intermedius occurs in a salinity range of 3-39ä, but is mostly found at 24-35ä. In the nordic waters, the species occurs mostly at temperatures between 9 and 18°C (total range 4.8-20.6°C). Swarming in the North Sea lasts from February until November.`,
        size: `Female 1-1.2, male 0.9 mm in length.`,
        depthRange: `Surface to 600 (2000) m.`,
        distribution: `Occurs in the northern North Sea, Skagerrak, Wadden Sea; inshore waters, but seems to avoid oligohaline conditions. North East Atlantic, north as Iceland (65°N) and SW Norway (62°N), North Sea, Baltic Sea, Mediterranean, Black Sea. In the North Atlantic bound to the coasts or the warmer parts.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/waterFleas/podonIntermedius/podon-intermedius.jpg`
    },
    podonLeuckartii: {
        id: 7,
        name: `Podon leuckartii`,
        description: `Female with a hemispherical brood pouch. The head is large, slightly bended downwards; the dorsal edge is almost straight or slightly curved. The eyes are large and hemispherical. The antennulae are very small and unable to move, situated on a common protuberance and are fused partially with this protuberance and the lower side of the head; the antennulae bear at the end four sensory papillae [P.leuckartii-f]. The antennae are very large; both branches (= endopod and exopod) with six hairy setae [P.leuckartii-app ]. Legs 1-3 with five segments; leg 4 is shorter and has only three segments. Leg 1 with a short and narrow exopodite bearing a firm seta. Leg 1 with a long endopodite; the first (= basal) segment bears 6-7 setae, of which the distal one is very long; the second and third segment are short, both with two large, stout setae with short hairs. Leg 4 with an exopodite bearing two setae, one very long, the other short. The post-abdomen is sharply pointed, straight or slightly S-curved, with a few fine lateral spines. Postabdominal setae about twice in length as the caudal peduncle on which they are situated. Male about the same size as female but more straightened in lateral view and the head somewhat larger [P.leuckartii-m ]. The endopodite of leg 1 with second segment bearing only one, long seta; the last segment with a convex protuberance bearing a hook [P.leuckartii-app ]. Postabdomen directed more backwards than in female. Copulatory organ weakly pointed.`,
        color: `bright grey-yellow, very transparent (unpreserved specimens).`,
        ecology: `P. leuckartii is a neritic species, found mostly at temperatures from 10 to 17 °C, but is able to survive near-freezing conditions. The salinity range is 6-35 ä (optimal at 23-25 ä). Occurs in the North Sea from spring to autumn.`,
        size: `Both sexes about 1 mm long.`,
        depthRange: `Surface.`,
        distribution: `All North Sea, including the shallow inshore waters (e.g. Waddenzee). Also Skagerrak, Kattegat and Baltic. North Atlantic, north as Barents Sea, Iceland, South Greenland; North Sea and Baltic Sea; North Pacific. Marginal occurrence in the W Mediterranean, the Black Sea and the South Atlantic.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/waterFleas/podonLeuckartii/podon-leuckartii.jpg`
    },
    podonPolyphemoides: {
        id: 8,
        name: `Podon polyphemoides`,
        description: `Female with an almost spherical brood pouch, more or less perpendicular in respect to the body. Carapace faintly reticulate. Head round. Eyes very large, occupying almost the whole forehead. Lower edge of labrum rounded. The antennulae [P.polyphemoides-f] are very small and unable to move; they are situated on a common protuberance and are fused partially with this protuberance and the lower side of the head; the antennulae bear at the end four sensory papillae. Exopodite of antenna with seven setae; the distal segment of both antennal branches are very small [P.polyphemoides-app ]. Exopodite of legs 1-3 with three long setae that are unequal in length; exopodite of leg 4 with two setae. Distal segment of endopodite of leg 1 with two, very large setae, about the same length as the whole leg. The postabdomen is very short with short end. The postabdominal setae are short but still much longer than the very small reduced caudal peduncle on which they are situated. Brood pouch with 2-7 embryos. Male with small conical carapace. Head and eyes larger than in the female. Distal segment of endopodite of leg 1 situated on a small peduncle, bearing a long hook; the preceding segment with only one seta [P.polyphemoides-app]. The copulatory organ is rounded off distally. `,
        color: `grey to yellowish white, transparent; the postabdominal end is often bluish.`,
        ecology: `Neritic, eurytherm and euryhaline species from eutrophic waters. Occurring at salinities ranging from 1.05 to 35.1 ä and tolerates temperatures up to 21°C (Baltic Sea) or 27°C (Black Sea). Rarely occurring in fresh water.`,
        size: `Female 0.6-0.65 mm; male 0.4-0.55 mm.`,
        depthRange: `Surface.`,
        distribution: `Northern North Sea, Skagerrak, Wadden Sea, also Baltic Sea. NE Atlantic: all European coasts from Lofoten (Norway) to Black Sea and Sea of Asov. Also in Caspian Sea by migration through the Volga-Don Canal. NW Atlantic: American East coast. South Atlantic: Argentinean East coast and West and South coasts of South Africa. Pacific: New Zealand coasts.`,
        img: `${process.env.BASE_ROUTE}/img/crustaceans/img/waterFleas/podonPolyphemoides/podon-polyphemoides.jpg`
    }
};

module.exports = animals;