const animals = [{
    bandedTubeDwellingAnemone: {
        name: 'Banded tube-dwelling anemone (Arachnanthus nocturnus)',
        description: 'Anemone living inside parchment-like tubes. Oral disc with a ring of long, pointed outer tentacles on the edge of the disc, and a tuft of shorter tentacles around the mouth. Disc up to 3 cm in diameter, tentacles 5 cm long.',
        color: 'Outer tentacles translucent brown and white banded; oral disc and inner tentacles whitish.',
        habitat: 'Anemone living inside tubes buried in mud, sand or fine gravel in areas of sand and coral rubble, down to 25 m. Retracts immediately by disturbance.',
        distribution: 'Occasional Florida, Bahamas and Caribbean.'
    },
    bentSeaRod: {
        name: 'Bent sea rod (Plexaura flexuosa)',
        description: 'A very common species with a variable outward appearance: small colonies are profusely and dichotomously branched; larger colonies are bushy, but tend to spread in one plane. Colonies up to 40 cm. Diameter of end branches 2.5-4.5 mm. Rim of apertures only slightly raised, sometimes forming a small lip below the aperture.',
        color: 'Color variable ranging from white through yellow, brown, purple to reddish purple; polyps occasionally lighter than the stalk.',
        habitat: 'Inhabit clear water patch reefs, down to 50 m.',
        distribution: 'Common Florida, Bahamas and Caribbean.'
    },
    bipinnateSeaPlume: {
        name: 'Bipinnate sea plume (Pseudopterogorgia bipinnata)',
        description: 'Colonies up to 57 cm and nearly as broad, usually growing in a single plane. Primary and secondary branches bear short, stiff branchlets about 2.5-4.0 cm long and 1-1.5 mm in diameter. These paired branchlets extend from the branches at regularly spaced intervals, 4-10 mm. Apertures quite small and slit like, arranged in a single or staggered double row on each side of the branches.',
        color: 'Purple to violet, occasional bright yellow to whitish.',
        habitat: 'Inhabit moderate to deep, clear water patch reefs.',
        distribution: 'Common Florida, Bahamas and Caribbean.'
    },
    blackSeaRod: {
        name: 'Black sea rod (Plexaura homomalla)',
        description: 'Colonies are bushy but compressed in vertical planes. Tend to branch laterally, with only occasional dichotomous branching. Mature colonies are up to 35 cm in height. It occurs in two forms: forma homomalla is broad with end branches of 4-5 mm in diameter; forma kuekenthali is taller with terminal branches of 2.5 mm in diameter. End branches are about 10 cm long. The tissue surrounding the apertures may be completely flat or only slightly raised.',
        color: 'Stalks brown to black; polyps contrasting light yellow brown to brown.',
        habitat: 'Inhabit clear water patch reefs, to 55 meters depth. In shallow waters forma homomalla is more abundant, while in deeper waters especially forma kuekenthali is found.',
        distribution: 'Common Florida, Bahamas and Caribbean.',
        remarks: 'A very powerful drug, called a prostaglandin, has been found in significant quantities in Plexaura homomalla . It has the ability to induce labor and therapeutic abortion, speed the healing of stomach ulcers, and reverse the effect of cyanotic congenital heart disease.'
    },
    bladeFireCoral: {
        name: 'Blade fire coral (Millepora complanata)',
        description: 'Colonies form thin, upright blades or plates that extend from an encrusting base. Colonies up to 50 cm. Outer edge of blades uneven with multiple extensions or short branches. The surface is smooth, covered with minute pores within which the polyps live. When the tiny polyps protrude, they appear as short, fine hairs.',
        color: 'Brown to light creamy yellow, with white branch tips.',
        habitat: 'Inhabit shallow water reef tops, covering rock and dead corals. Usually in areas with some water movements, down to 15 m depth.',
        distribution: 'Abundant to common Florida, Bahamas and Caribbean.',
        remarks: 'Contact with a live colony may cause severe burning sensations due to toxins injected by the nematocysts.'
    },
    blueCrustCoral: {
        name: 'Blue crust coral (Porites branneri)',
        description: 'Colonies form thick encrustations, of 15 cm in diameter, with knobby projections of 2.5 cm in diameter. Extended polyps give the colony a soft, fuzzy appearance. When the polyps are retracted, small, pitted, polygonal corallites give the colony a porous appearance.',
        color: 'Bluish to pale lilac and purple.',
        corallites: 'Calices narrowly spaced with a poorly developed wall. Corallites with 12 septa, 1.6-1.8 mm in diameter. Columella trabecular and discontinuous.',
        habitat: 'Inhabit shallow, dead areas of older reefs, down to 12 m. ',
        distribution: 'Rare South Florida, occasional to uncommon Bahamas and Caribbean.'
    },
    blushingStarCoral: {
        name: 'Blushing star coral (Stephanocoenia michelinii)',
        description: 'This species forms small to moderately large heads (15-75 cm) and is often simply encrusting.',
        color: 'Brownish. On approaching this coral, the polyps withdraw giving the colony a blushing appearance.',
        corallites: 'Columella massive, more or less laterally compressed. Septa in three cycles, the first two with pali or with paliform lobes attached to the columella.',
        habitat: 'Probably generally present in exposed waters; not very common. From 1 to nearly 100 m, but most common between 3 and 50 m.',
        distribution: 'Throughout the Caribbean.'
    },
    boulderBrainCoral: {
        name: 'Boulder brain coral (Colpophyllia natans)',
        description: 'Generally, the colonies form large rounded domes of up to 2 m in diameter, but also large rounded plates can be formed. The surface is covered with a curved system of ridges and valleys. The ridge tops have a thin, but distinct groove and a second line is located halfway down the ridge, where the slope decreases in angle and slants to form the valley. The costae between adjacent corallites are discontinuous, and all costae are equal in thickness. The valleys are long, wide and meandering, containing several polyps. Polyps are extended only at night, their tentacles forming long meandering rows along the ridges.',
        color: 'Typically the ridges are brown and the valleys green, tan or whitish.',
        corallites: 'The septa are equal in thickness, and there are less than 12 septa per cm. The columella is discontinuous and thin, less than a quarter of the valley width.',
        habitat: 'Inhabit reef tops and reef slopes, down to 50 meters.',
        distribution: 'Common in Florida, Bahamas and Caribbean.',
        remarks: 'In the related Closed-valley brain coral (Colpophyllia breviserialis ), the valleys are closed and hold only one or two polyps.'
    },
    boulderStarCoral: {
        name: 'Boulder star coral (Montastrea annularis)',
        description: 'The colonies grow in several morphotypes, that were originally described as separate species. The species occurs as long, thick columns with enlarged, dome-like tops; large, massive mounds; sheets with skirt-like edges; irregularly bumpy mounds and plates or as smooth plates. Colonies up to 3 meter in diameter. The surface is covered with distinctive, often somewhat raised, corallites.',
        color: 'Shades of green to brown, yellow-brown and gray.',
        corallites: 'Corallites 2.1-3.5 mm in diameter, with 24-26 septa. The distance between neighboring corallites is between 0.6 and 1.2 mm. Septa and theca raised (M. annularis-corallite). Septa with small teeth. Columella trabecular.',
        habitat: 'Inhabit most reef environments and the species is often the predominant coral between 7 and 25 m. The flattened plates are most common at deeper reefs, down to 50 m.',
        distribution: 'Common to abundant Florida, Bahamas and Caribbean.',
        remarks: 'Recent investigations suggest that this species consists of three or more separate species: Montastrea annularis , corallite diameter 2.1-2.7 mm, with 24 septa, 1-1.2 mm between neighboring corallites, raised septa and theca and moderately well developed costae. Grows mostly in clusters of long, thick columns with enlarged, dome-like tops. Montastrea faveolata , corallite diameter 2.1-2.7 mm, with 24 septa, 0.6-0.9 mm between neighboring corallites and poorly developed costae. Grows mostly in large, massive mounds and sheets with skirt-like edges. Montastrea franksi , corallite diameter 2.5-3.5 mm, with 24-26 septa, 1-1.2 mm between neighboring corallites and well developed costae. Grows mostly in irregularly bumpy mounds and plates.'
    },
    boxFireCoral: {
        name: 'Box fire coral (Millepora squarrosa)',
        description: 'Colonies form open-ended, thick-walled, box-like structures that extend upward from an encrusting base; up to 5 cm in height. Often join to form a honeycomb pattern or encrust in a ripple wave-like pattern. The surface is smooth, covered with minute pores within which the polyps live. When the tiny polyps protrude, they appear as short, fine hairs.',
        color: 'Tan to mustard or brown, with reddish or lavender tints; open ends of boxes whitish.',
        habitat: 'Inhabit shallow water reef tops, covering rock and dead corals. Usually in areas with a heavy surf. May be exposed to the air in troughs of the sea.',
        distribution: 'This species has a discontinuous distribution in the Caribbean, strtching from the Dominican Republic, Puerto Rico, the Lesser Antilles arc to Grenada as its southern limit, with a disjunct distribution in Brazil.',
        remarks: 'Not considered toxic, although may sting sensitive bare skin.'
    },
    branchingFireCoral: {
        name: 'Branching fire coral (Millepora alcicornis)',
        description: 'Colonies form multiple branched structures. Branches generally cylindrical. Most commonly branched in a single plane, but occasionally in all directions. Often encrust and overgrow gorgonian colonies, taking on their shape. Colony up to 50 cm. The surface is smooth, covered with minute pores within which the polyps live. When the tiny polyps protrude, they appear as short, fine hairs.',
        color: 'Brown to light creamy yellow, with white branch tips.',
        habitat: 'Inhabit all marine environments and is the only fire coral that commonly grows deeper than 10 m. Distributed from 1 to 40 m depth.',
        distribution: 'Abundant to common Florida, Bahamas and Caribbean.',
        remarks: 'Contact with a live colony may cause severe burning sensations due to toxins injected by the nematocysts.'
    },
    buttonCupCorals: {
        name: 'Button cup corals (Caryophyllia spp.)',
        description: 'Corallum ceratoid, straight and firmly attached through a robust pedicel about half the diameter of the corallite. About 1 cm in diameter and 12 mm in height. Theca covered with porcelaneous granules; costae usually inconspicuous; corallum white. Septa arranged in 3 cycles: 10:10:20 (=40 septa). Septa of each cycle progressively narrower and less exsert. Columella fascicular.',
        color: 'Upper half of corallite in shades of brown; basal deposits creamy white.',
        habitat: 'Attached to hard substrate on the underside of ledge overhangs and cave ceilings. Occasionally in the recesses of small cavities.',
        distribution: 'Most species have an Antillean distribution.',
        remarks: 'Two species of this genus are recorded from the Leeward Island group: Caryophyllia maculata and Caryophyllia antillarum.'
    },
    cactusCoral: {
        name: 'Cactus coral (Mycetophyllia spp.)',
        description: 'Colonies form flat plates, mounds and hemispherical domes. The upper surfaces of M. aliciae and M. ferox are covered with ridges that often run towards the colonies center. The colony, and especially their ridges, appear fleshy (Mycetophyllia spp.).M. aliciae has open valleys and sometimes even independent ridges, while in M. ferox , the valleys are closed. M. reesi lacks ridges, and the fleshy surface is covered with rounded bumps with the polyps located at the center. The polyps lack tentacles. Colonies of M. aliciae can reach 45 cm in diameter, while these of M. ferox and M. reesi are somewhat larger and can reach 60 cm in diameter.',
        color: 'The ridges and corallites of M. aliciae are often of light colors, contrasting with darker valleys in shades of green, brown or gray. The ridges of M. ferox often contrast with darker valleys in shades of green, red-brown, brown or gray. M. reesi is found in shades of green, brown, gray, blue-gray and may have iridescent tints.',
        corallites: 'The corallite size varies between 1 and 2 cm. The columella is trabecular and discontinuous between the corallite centers, although there is a lamellar linkage.',
        habitat: 'M. aliciae and M. reesi inhabit most moderate to deep reefs environments, down to 70 m, while M. ferox tends to inhabit shaded areas of midrange reefs, down to 40 m.',
        distribution: 'M. aliciae and M. ferox are found occasionally in Florida, Bahamas and Caribbean, while M. reesi is only found in the Caribbean.',
    },
    colorfulSeaWhip: {
        name: 'Colorful sea whip (Leptogorgia virgulata)',
        description: 'Colonies form long, straight, stiff, moderately branched, whip-like stalks. Colonies can reach a length of 45 cm. Polyps in multiple rows along two sides. Calyces do not protrude when the polyps are retracted.',
        color: 'Stalks highly variable in color, including shades of lavender, violet, purple, red, orange and yellow. Polyps translucent white.',
        habitat: 'Inhabit most environments, especially in areas with hard substrate and some sand, down to 40 m.',
        distribution: 'Common Florida, rare Caribbean.'
    },
    commonSeaFan: {
        name: 'Common sea fan (Gorgonia ventalina)',
        description: 'Colonies are large, in a single plane, and fan shaped. The outline of the colony is an interconnected network of thin branches which enclose irregular, triangular or rectangular spaces. The branches are round or slightly compressed in the plane of the fan. The apertures are very small pores located in two rows along the edges of the branches. The fans can be large, 1.5-1.8 m high and 1.2-1.5 m broad.',
        color: 'The fans are purple, yellow or brownish in color.',
        habitat: 'Restricted to the outer reefs and patch reefs to 30 m.',
        distribution: 'Very widespread from Bermuda south to Curacao.',
        remarks: 'Two other sea fans occur in the region, but are less common. The Venus sea fan (Gorgonia flabellum ) can be distinguished by the flattening of the branches. In G. ventalina the branches are round or slightly flattened in the plane of the fan, while in G. flabellum the branches are flattened at right angles to the plane of the fan. Colonies can be 1 m in height and can be almost as broad. The Wide-mesh sea fan (Gorgonia mariae ) is much smaller (up to 30 cm) and the secondary branches do not always unite or interconnect, giving a widely meshed appearance.'
    },
    corkySeaFingers: {
        name: 'Corky sea finger (Briarium asbestinum)',
        description: 'The colony is composed of upright, cylindrical branches of about 1 cm in diameter, which are jointed only at the common incrusting base and lower parts of the colony. The long, brown tentacles of the polyps give the species a hairy appearance. If touched, the tentacles will slowly retract, exposing a smooth to nodular surface with numerous small apertures, or openings, all over the branch. The branches can be 60 cm tall.',
        color: 'Purplish gray; polyps brownish.',
        habitat: 'Inhabit most reef environments, especially shallow fringing, patch and back reefs areas, to about 30 meters depth.',
        distribution: 'Abundant to common South Florida, Bahamas and Caribbean.'
    }
}];

//continue on page 2

module.exports = animals;