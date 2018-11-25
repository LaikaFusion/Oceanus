const animals = [{
    beadletAnemone: {
        name: `Beadlet anemone (Actinia equina)`,
        description: `Beadlet anemone (Actinia equina)`,
        tentacles: `Tentacles moderate in length and hexamerously arranged, those of cycles 1 and 2 virtually equal and not easily distinguished, in six cycles, up to 192.`,
        colouration: `Usually fairly uniform, with no pattern on the disc: various shades of red, from blackish maroon to pale scarlet, various shades of green, orange, or brown. Some individuals, particularly green ones, or young red ones, may have irregular spots or streaks of yellow, greenish, or pale blue on the scapus. The acrorhagi are almost invariably bright blue, occasionally white or pink; a narrow line of blue usually encircles the limbus and a blue spot may be present on each angle of the mouth. Bi-coloured specimens, e.g. green column, tawny orange tentacles, are frequent in some areas. Totally colourless specimens sometimes occur in permanently dark habitats - sea caves or beneath large boulders.`,
        habitat: `Typically a shore form occurring from high up, around HWN, to the lowest levels, and also in shallow water offshore, down to about 20 m. Occurs attached to any convenient hard substratum in exposed or sheltered situations, sometimes attached to rocks below a layer of sand, expanding above the sand. Also found in regions of variable salinity, such as estuaries or in the little rills of fresh water that often occur on beaches at low water.`,
        distribution: `Very common on all coasts of the British Isles and western Europe, including the Mediterranean, from north Russia (Kola peninsula) to the west coast of Africa, almost to the equator, and possibly further afield.`
    },
    branchingAnemone: {
        name: `Branching anemone (Lebrunia danae)`,
        description: `Stubby, branched pseudotentacles with prominent, nematocyst-bearing knobs. Animal with extended pseudotentacles up to 25 cm.`,
        color: `Usually in shades of brown to dark gray, sometimes with lighter colored markings, occasionally in shades of blue-green.`,
        habitat: `Body hidden from view in recesses, and concealed by the branch-work bed of pseudotentacles. Long, unbranched, true tentacles are only extended at night.`,
        distribution: `Common Florida, Bahamas and Caribbean.`
    },
    cloakAnemone: {
        name: `Cloak anemone (Adamsia carciniopados)`,
        description: `Long axis of base up to 100 mm, span of tentacles to 50 mm. Base and lower part of the column expanded laterally, forming two lobes enveloping a hermit crab and its gastropod shell so that the disc is beneath the crab with the two lobes meeting on its dorsal side. Base capable of secreting a chitinous membrane which effectively increases the capacity of the shell so that as the crab grows it has no need to change its abode. Upper part of column short and cylindrical. Cinclides are present on low mounds on the lower part of the column, from which long acontia are profusely and freely emitted at the slightest provocation.`,
        colouration: `Column, disc and tentacles white, the lower part of the column more or less suffused with chestnut. Column usually spotted with lilac-pink or crimson and a line of the same running around its upper margin; acontia usually pink, rarely white.`,
        habitat: `Usually found on substrata of sand or gravel, especially where stones or broken shells are present, or near rock outcrops, etc. Typically a sublittoral species occurring down to 200 m or more but occasionally found on the lower shore where it may he washed up after storms. Young specimens, of normal anemone-shape but possessing the characteristic pink spots of the adult, may occur on rocks or shells between tidemarks. It lives almost exclusively on the hermit crab Pagurus prideauxi (Leach) in British waters, although other species may be involved elsewhere.`,
        distribution: `Common around all coasts of Britain and western Europe in general, from Norway to the Mediterranean.`
    },
    clubTippedAnemone: {
        name: `Club-tipped anemone (Telmatactis americana)`,
        description: `Tentacles with enlarged, 'club-like' tips, surrounding the raised mouth. Oral disc up to 5 cm in diameter. Column large and barrel-shaped, diameter about equal to that of the oral disc.`,
        color: `Tentacles and oral disc whitish, brown or lavender, often mottled and marked with flecks and splotches.`,
        habitat: `Inhabit caves and other dark recesses, body usually hidden, but occasionally exposed.`,
        distribution: `Common to occasional Bahamas, central, eastern and southern Caribean; rare northwestern Caribbean.`
    },
    corkscrewAnemone: {
        name: `Corkscrew anemone (Bartholomea annulata)`,
        description: `The column or stalk is rather broad, but short. Oral disc up to 12 cm in diameter. The numerous thin tentacles are long and often drooping.`,
        color: `Tentacles and body in shades of gray, brown or green. The tentacles are translucent and marked with whitish 'corkscrew-like' markings.`,
        habitat: `Inhabit reefs and areas of sand and coral rubble. It grows often under rocks or other hard objects, down to 40 m.`,
        distribution: `Common Florida, Bahamas and Caribbean.`
    },
    giantAnemone: {
        name: `Giant anemone (Condylactis gigantea)`,
        description: `This is the largest and showiest anemone in the Caribbean. It may attain a diameter across the tentacles of over 30 cm. The tentacles are long with slightly enlarged tips.`,
        color: `Tentacles and body white, often with tints of gray, brown, yellow or green. Tips of tentacles pink, lavender, yellow, chartreuse, or occasionally, white.`,
        habitat: `It is common on reefs, down to 30 m, and in shallow grass beds in lagoons.`,
        distribution: `Common Florida, Bahamas and Caribbean.`
    },
    hiddenAnemone: {
        name: `Hidden anemone (Lebrunia coralligens)`,
        description: `Long pseudotentacles with slightly enlarged tips extend from fissures. The tips are slightly enlarged and occasionally double lobed. Animal with extended pseudotentacles up to 6 cm.`,
        color: `Pseudotentacles brown to dark gray, to bluish-green with shaded line and ring markings. Tips often darker.`,
        habitat: `Inhabit narrow fissures in coral heads, with only the ends of the pseudotentacles extending from the openings. Long, unbranched true tentacles may be extended during night.`,
        distribution: `Occasional Bahamas and Caribbean.`
    },
    knobbyAnemone: {
        name: `Knobby anemone (Bartholomea lucida)`,
        description: `The column or stalk is rather broad, but short. The numerous thin tentacles are long and often drooping.`,
        color: `Tentacles and body in shades of gray, brown or green. The tentacles are translucent and bear numerous nematocyst-bearing knobs.`,
        habitat: `Inhabit reefs and areas of sand and coral rubble. It grows often under rocks or other hard objects, down to 30 m.`,
        distribution: `Common Florida, Bahamas and Caribbean.`
    },
    orangeStripedAnemone: {
        name: `Orange-striped anemone (Haliplanella lineata)`,
        description: `The Orange-striped anemone. Diameter of base up to 25 mm, height to 40 mm, but usually about half this size in British examples. Base moderately adherent, usually a little wider than the column. Column divided into scapus and a long capitulum, with a parapet and fosse which are clearly defined and permanent in all states of expansion. Scapus tall in full extension, with inconspicuous cinclides on the endocoels; acontia fairly readily emitted. Capitulum up to half the length of the scapus in full extension, flaring out to the disc, which is wider than the parapet.`,
        tentacles: `Long, very long in small specimens, hexamerous, or more usually, irregular in arrangement, up to about 100. `,
        colouration: `Scapus olive green, brown or greyish, rarely pink; usually bearing prominent longitudinal stripes on the endocoels. The stripes may be orange, yellow or white, single or double; in some populations they are absent but such specimens are unknown in Britain. Capitulum and disc translucent grey-green, the latter often with white markings and occasionally with irregular blotches of reddish brown or crimson. Tentacles very translucent, colourless or pale grey-green, usually irregularly flecked with white or grey.`,
        reproduction: `Longitudinal fission is habitual and frequent; after fission the regenerating part of the column is usually pink.`,
        nematocystsOfAcontia: `Large p-mastigophores 29-48 x 5.0-6.0 öm, small p-mastigophores (amastigophores) 12-20 x 3.0-4.5 öm, b-mastigophores 12-21 x 2.0-3.0 öm.`,
        habitat: `In sheltered bays, harbours, or estuaries, rarely in the open sea; typically an intertidal species but may also occur in the shallow sublittoral. Attaches to any suitable hard substratum - rocks and stones, shellfish, wooden pilings and wharves, etc. Tolerant of extreme temperature and salinity variations, frequently occurring in brackish creeks or lagoons.`,
        distribution: `Reported from many localities in Britain, on all coasts; elsewhere widely distributed throughout Europe, including the Mediterranean, and the northern hemisphere in general.`
    },
    paleAnemone: {
        name: `Pale anemone (Aiptasia tagetes)`,
        description: `These small anemones attain a height of only 5 cm, with slender columns and a few, thin, long, pointed tentacles. Oral disc up to 5 cm in diameter.`,
        color: `Tentacles transparent; oral disc brownish to bluish white.`,
        habitat: `They grow on rocks or other hard objects, down to 18 m. Often in groups, but may grow solitary.`,
        distribution: `Common to occasional Florida, Bahamas and Caribbean.`
    },
    snakelocksAnemone: {
        name: `Snakelocks anemone (Anemonia viridis)`,
        description: `Size up to about 70 mm across the base with a tentacle span of up to 180 mm. Base lightly but closely adherent, broader than column. Column variable in height, often short and hidden by the tentacles but capable of becoming taller than wide; smooth, with small, roughly conical acrorhagi on the parapet.`,
        tentacles: `Tentacles long, fairly stout and flexuous, irregularly arranged in correlation with habitual reproduction by longitudinal fission, up to about 200 in number. The tentacles are rarely retracted but they can be completely retracted into the column (A. viridis tentacles).`,
        colouration: `Column reddish or greyish brown, usually darkest above, sometimes with irregular pale streaks, acrorhagi matching the ground colour. Disc brown or greyish, usually with white radial lines, tentacles grey-brown or bright grass-green with purple tips. Some tentacles may bear a median longitudinal pale line, more rarely they are suffused with crimson, mainly on the aboral sides, which may extend onto the column. Occasionally pale specimens - whitish or yellowish - may occur.`,
        habitat: `In pools, attached to rocks or various algae, on Zostera leaves etc., usually in well-lit situations. Occurs mainly on the shore, from about mid-tide level downwards, mostly in localities exposed to strong wave action but also in sheltered places, and in the shallow sublittoral down to about 20 m. A conspicuous species and, if present, may well be the first anemone to catch the eye. A. viridis is unable to tolerate prolonged conditions of extreme cold; in the exceptionally cold winter of 1963-64 it disappeared from many localities.`,
        distribution: `Locally abundant on south and west coasts of the British Isles, extending north to mid-Scotland. Common on all south-west coasts of Europe and in the Mediterranean`,
        remarks: `The common name "snakelocked anemone" or "snakelocks" was first applied by Gosse to another species, Sagartiogeton undatus, but has been taken over by popular usage for the present species.`
    },
    sunAnemone: {
        name: `Sun anemone (Stichodactyla helianthus)`,
        description: `Flattened oral disc covered with hundreds short, thick tentacles with a rounded tip. Oral disc up to 15 cm.`,
        color: `Tentacles and oral disc green to brown.`,
        habitat: `Inhabit shallow reefs, down to 9 m. Dense clusters may occupy large areas.`,
        distribution: `Common to occasional Bahamas, eastern and southern Caribbean; rare northwestern Caribbean.`
    },
    actinaugeRichardi: {
        name: `Actinauge richardi`,
        description: `Up to 120 mm tall and 80 mm diameter in full expansion. Base typically invaginated into the column, forming a rounded cavity enclosing a ball of mud or sand, but capable of becoming normal in shape and adhering to solid substrata. Column divided into scapus and scapulus, the former with numerous, often large solid tubercles which tend to form 12 longitudinal rows above, ending in a ring of 12 prominent coronal tubercles at the upper edge of the scapus. Scapulus bearing 24 longitudinal ridges which form pairs converging at each coronal tubercle. General texture of column tough and cartilaginous, the mesogloea very thick in contraction (although this anemone is not very contractile), usually with periderm present on the interspaces between tubercles.`,
        tentacles: `moderate or long in extension, hexamerously arranged in five cycles, up to 96 in all. Those of the inner four (endocoelic) cycles with solid basal swellings on their aboral sides, the swellings of cycle 4 being confluent with the scapular ridges.`,
        colouration: `Variable and typical of many deep-water anemones: column dirty white, tinged with green or red, disc and tentacles white, brown, red, etc., tentacles often longitudinally striped, with their basal swellings always white.`,
        habitat: `Usually on muddy or sandy bottoms, always offshore, in depths greater than 50 m. This anemone usually lives free with the ball of mud in its base acting as a sea anchor but is also capable of normal attachment, occasionally being found on stones or shells.`,
        distribution: `Generally a deep water north-east Atlantic species, occurring from Norway to Biscay, possibly in the Mediterranean or even further south, occasional in the North Sea.`
    },
    actinothoeSphyrodeta: {
        name: `Actinothoe sphyrodeta`,
        description: `Very soft and delicate in texture, which expands its tentacles very readily. Diameter of base up to 20 mm, span of tentacles to 30 mm; specimens occurring on the shore are usually about half this size. Base a little wider than column, lightly adherent. Column usually short but capable of becoming taller than wide in extension. Cinclides visible as dark dots on upper part of column, acontia are emitted through them very readily.`,
        tentacles: `Moderate in length, characteristically stout at the base and tapering to fine points; they are usually irregularly arranged, up to about 120.`,
        colouration: `Column rather uneven in colour, translucent dirty white or greyish, with longitudinal patches of pure white tending to form stripes. Tentacles white, translucent. Disc may be white, with the pigment patchily distributed, bright yellow or pale orange, usually with vague dark markings surrounding the tentacle bases.`,
        nematocystsOfAcontia: `p-mastigophores 43-86 x 6.0-9.0 öm, b-mastigophores 22-32 x 1.6-2.5 öm`,
        habitat: `Attached to rocks or other hard substrata, usually on flat surfaces rather than in holes or crevices like most other sagartiids; also occurs on various algae, e.g. Laminaria, or Himanthalia buttons. Occasional on the shore in shaded situations, usually on vertical or overhanging surfaces. More common and widespread sublittorally, down to about 40 m. Frequently occurs in the company of Caryophyllia and Corynactis.`,
        distribution: `Locally abundant on west coasts of British Isles, as far north as Shetland but more common in the south. Southern limits of its range are uncertain; it occurs at least to Biscay but is apparently absent from the Mediterranean.`
    },
    boloceraTuediae: {
        name: `Bolocera tuediae`,
        description: `One of the largest of the North Sea anemones, up to 250 mm across the base. Base lightly adherent. Column cylindrical, variable in height, sometimes taller than wide but often kept short and hidden by the tentacles; smooth and soft in texture, never with verrucae or acrorhagi, occasionally with a slight rim at the top, suggestive of a parapet, in some states of contraction. Disc wide.`,
        tentacles: `Tentacles stout, long and rather graceful in full extension, not readily retracted; they are hexamerously arranged, up to about 200. In most states of contraction the tentacles are longitudinally fluted and at the base of each is a slight circular constriction indicating the position of the basal sphincter muscle. The reason for the tentacles being deciduous is unknown, nevertheless they are readily shed on occasion and isolated tentacles remain alive for many days, although they cannot regenerate into new anemones as occurs in some species with deciduous tentacles`,
        colouration: `Fairly uniform - orange, buff, pink or whitish, the disc and tentacles being slightly translucent. Disc sometimes with vague indications of a dark pattern around the tentacle bases.`,
        habitat: `An offshore species occurring on rocks, stones and shells, from about 20 m depth down to at least 2000 m.`,
        distribution: `Occurs around all coasts of the British Isles but is rare in the south. Generally distributed throughout the North Atlantic to the Arctic circle and eastern North America.`
    },
    calliactisParasitica: {
        name: `Calliactis parasitica`,
        description: `Diameter of base up to 80 mm, height to 100 mm. Base a little wider than the column, capable of firm adhesion. Column not divided into regions and without tubercles, its surface rough and leathery, with a grainy appearance. Sometimes patches of thin periderm are present. Cinclides fairly prominent, occurring on small mounds in a zone just above the limbus, one on each endocoel; acontia are readily emitted from them when the anemone is disturbed. Disc concave, fairly wide when fully expanded.`,
        tentacles: `Tentacles moderate in length and very numerous, hexamerously arranged, up to at least 700 in a large specimen.`,
        colouration: `Ground colour of column pale buff, yellowish, or light brown. It is more or less densely freckled brown or reddish, the freckles tending to form longitudinal stripes, these being subdivided proximally by short vertical lines of yellowish cream which lie on the endocoels and run upward for a short distance from the limbus. The overall effect is variable; sometimes the dark stripes are indistinct; often irregular blotches and spots of black, brown, purplish or red occur amongst the other colours breaking up the striped effect, sometimes these alone are present. Disc and tentacles translucent cream or yellowish, occasionally orange, usually with a simple pattern of opaque cream on the disc, the tentacles each with two broken longitudinal lines of reddish brown, often with tiny cream spots in the interruptions.`,
        habitat: `Usually found in association with the hermit crab Pagurus bernhardus (Linnaeus), often with more than one anemone on the gastropod shell inhabited by the crab. May also occur on other substrata such as other crabs (e.g. Maia) or on stones, etc. Typically a sublittoral species occurring down to about 60 m but occasionally found on the shore in sheltered localities, or washed up by storms.`,
        distribution: `Common in the English Channel but not extending much further north than the Bristol Channel or southern Ireland; records from the southern part of the North Sea are very dubious. Common around south-west Europe and in the Mediterranean, where it may be associated with other species of hermit crab.`
    }
}];

module.exports = animals;