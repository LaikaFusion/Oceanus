
const animals = {
    upsidedownJelly: {
        id: 1,
        name: `Upsidedown jelly (Cassiopea frondosa)`,
        description: `This jellyfish has a flattened dome, and a widespread array of finely branched mouth tentacles. The arms cover about three quarters of the dome. In between, leaf-like appendages can extend from the tentacles. `,
        color: `greenish brown.`,
        tentacles: `No tentacles around the edge of the dome.`,
        size: `dome diameter up to 20 cm.`,
        habitat: `Lives in the sheltered bays and seagrass fields, where it rests upside down on the bottom, exposing the symbiotic algae living in the arm to the sunlight. Part of its nourishment come from these algae.`,
        depthRange: `ranges from 1 m down to 10 m.`,
        distribution: `Common all over the Caribbean, but restricted to mangrove bays and seagrass lagoons.`,
        remarks: `Touching this jellyfish can produce a sting on bare skin that may cause a redness or even a welt.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/jellyfish/upsidedownJelly/upsidedown-jelly.jpg`
    },
    atollaWyvillei: {
        id: 2,
        name: `Atolla wyvillei`,
        description: `Umbrella flattened and disc-like [A.wyvillei-habitus ] ; exumbrella with a deep circular, coronal furrow situated nearer umbrella margin than apex; rim of central lens-shaped disc overhanging coronal furrow, rim occasionally with up to 21 notches; jelly thick. [A.wyvillei-umbrella ]. Usually 44 pedalial thickenings arranged in an innermost series of 22 solid tentacles alternating with an equal numbered outermost series of rhopalia. Tentacular pedalia may have longitudinal furrows; rhopalial pedalia together with hood and statocyst forming a sense organ. Base of stomach in the shape of a four-leaved clover, stomach wall attached interradially to umbrella disc over four flattened triangular gastric septa; four perradial ostia from stomach leading into annular gastrovascular sinus. Gastric septa with small cavities and canals. Gastrovascular sinus typically with 22 pairs of closely adjacent radial septa, between which narrow channels run each to base of one rhopalium; septa diverging at inner ends and extending beyond inner margin of coronal muscle. Manubrium wide, projecting below disc, with four leaf-shaped, somewhat pointed, perradial lips each thickened by bulging, longitudinal, mesogloeal ridge. The eight gonads first develop as crescent-shaped endodermal thickenings on the subumbrellar wall of the gastro- vascular sinus opposite the ends of the gastric septa at about the level of the coronal furrow. In mature females each gonad is distinct, oval or bean-shaped; in mature males the gonads are irregularly folded and lengthened appearing as a more or less continuous circle of gonad tissue.`,
        size: `Umbrella up to 150 mm in diameter, sexually mature specimens all over 40 mm in diameter.`,
        color: `In nature completely covered with a thin, very delicate, dark reddish brown epithelial layer; stomach walls always intensely dark.`,
        ecology: `May reach sexual maturity at any time of year.`,
        depthRange: `In open waters in daytime at a depth of 500-1,500 m, closer to the surface at night and in upwelling areas.`,
        distribution: `This deep-water species is likely to be absent from the northern North Sea, but is present in the Faeroe-Shetland and Faeroe-Iceland areas, off Greenland, Norwegian Sea, and S and W off Ireland. A deep-water cosmopolitan.`,
        remarks: `Polypoid stage absent.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/jellyfish/atollaWyvillei/atolla-wyvillei.jpg`
    },
    aureliaAurita: {
        id: 3,
        name: `Aurelia aurita`,
        description: `Umbrella flat, flexible, transparent; with eight simple marginal lobes arising from exumbrella slightly above umbrella margin, shallowly — almost imperceptibly — cleft between. Marginal tentacles small, filiform, up to a few hundred to more than 1000 in large specimens, arising nearly at bell edge. Subumbrellar musculature inconspicuous. From stomach lead 16 unbranched adradial canals, the eight perradial and eight interradial canals typically fork roughly dichotomously into branches, which connect approximately straight to ring canal. Gonads invaginated, with external subgenital pits, appearing as four horseshoe-shaped ribbons in the gastric cavity, conspicuous due to their colour and transparency of bell. The four unbranched oral arms as long as umbrella radius, tapered, V-shaped in section, with thick firm mesogloea and much-crenulated lips with many small tentacle-like processes along their margins [A.aurita-subumbrella ]. Oral arms in life typically held horizontally when young (when shorter than bell radius), dangling down in older specimens (when longer than radius).`,
        size: `Diameter of umbrella usually up to 250-400 mm.`,
        color: `Transparent, some specimens colourless throughout, sometimes gonads coloured red through magenta to blue, in some specimens the extreme umbrella margin or the entire umbrella may be coloured the same as the gonads.`,
        ecology: `In British waters the planktonic ephyra stage may be expected any time from January to early April; mature medusae are usually found from the end of April to late August, some adults surviving into the winter in deeper waters. Ephyrae tend to appear later in more northern or colder waters. Generally an inshore species, it may establish local races up estuaries and probably in harbours; it may also be very sporadic in its appearance, its absence and sudden appearance probably due to wind effects.`,
        depthRange: `Usually found at the surface, it may go deep under adverse weather conditions.`,
        distribution: `The most common Scyphomedusa throughout the North Sea; may be locally absent in some years. Cosmopolitan from northern boreal to tropical waters.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/jellyfish/aureliaAurita/aurelia-aurita.JPG`
    },
    catostylusTagi: {
        id: 4,
        name: `Catostylus tagi`,
        description: `Large, hemispherical, little known. Bell massive, flexible but firm; recorded to 65 cm; surface smooth, except for shallow forking grooves in peripheral ca. 1/6 (?) of radius. Marginal lappets up to 8 per octant, triangular, plus 2 narrow rhopalar lappets approximately same length; rhopalia 8. Mouth-arms 8, approximately as long as bell diameter, mouthlets on distal 3/4; tapering neatly to somewhat pointed end; without filaments or clubs. Gonads rimming the cross-shaped stomach.`,
        color: `recorded with exumbrella bluish-white through off-white to pale cream, also brown; peripheral exumbrellar grooves reported "reddish or brownish purple"; gonads outlining stomach-cross once reported red.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/jellyfish/catostylusTagi/catostylus-tagi.jpg`
    },
    cepheaCephea: {
        id: 5,
        name: `Cephea cephea`,
        description: `Massive; with central mound bearing 10-50 large irregular warts, surrounded by a moat; only peripheral region of bell flexing. Disc wider than high, to ca. 50 cm; varied in shape from filamentous to thick, in some specimens angular, projections, pointed to rounded; peripheral flexible skirt region without marks, grooved radially. Marginal lappets 50-70, rounded, clefts between shallow, forming crenate edge; rhopalia 8, set in from margin. Mouth-arms 4, each forking basally making 8 main groups of branches; much branched, extending slightly beyond disc margin; mouthlets numerous, 10-50 short clubs and long filaments between the branches, filaments up to 2-3 times disc diameter. Radial canals 32 (8 main plus 8 groups of 3), joined peripherally by anastomosing network; no ring cana`,
        color: `exumbrella blue through lilac to mauve, translucent peripherally; mouth-arms brown, short clubs white, filaments colorless`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/jellyfish/cepheaCephea/cephea-cephea.jpg`
    },
    chrysaoraHysoscella: {
        id: 6,
        name: `Chrysaora hysoscella`,
        description: `Umbrella saucer-shaped, with thick jelly and smooth exumbrella. Ring canal lacking. Marginal lappets 32-48, semi-circular in outline, clefts between tentacular lappets uniform in depth. Four perradial and four interradial rhopalia; tentacles 24 in adult, three of uniform size per octant, all arising from edge of disc in cleft between lappets. Stomach pouches 16; in marginal zone, typically having the eight rhopalar stomach pouches much narrower than the eight inter-rhopalar pouches. Rhopalar and tentacular pouches simple and unbranched. Length of oral arms up to ca. five times bell diameter, narrow, V-shaped in section, edges frilled, extreme terminal region (may be lost) spirally coiled. Radial septa typically narrow, becoming wider centripetally only gradually, inner end roughly truncate. Thickened subumbrellar basal portions of manubrium fused to form four gonadial pouches with circular or oval orifices [C.hysoscella-subumbrella ].`,
        size: `Umbrella up to 30 cm in diameter.`,
        color: `Colouration greatly varied, but the lappets are typically brown [C.hysoscella-habitus ]; the rest of bell is colourless, or variously coloured, or with varied pattern of radiating lines or patches [C.hysoscella-pigment patterns ]. Type 1 (fig. C) without a pattern; Type 2 (fig. A) with a dark pattern on a light background; and Type 3 (fig. B) with a light pattern on a dark background [C.hysoscella-patterns ]. Some lines meeting near-centrally to form isosceles triangles, some specimens having the ‘triangles’ filled in. Ground colour varied from colourless through white to yellow, orange and brown, radial lines varied from red through orange to chocolate. Mouth arms white, yellowish to orange, perhaps also brown.`,
        ecology: `In British waters young medusae first appear in May, peak abundance of larger specimens from mid-June to September. Off the Dutch coast, peak abundance from mid-August to mid-October.`,
        depthRange: `More abundant in the water column at times of ebb and flow with strong currents, than during periods of slack water. Usually swimming at several feet below the surface.`,
        distribution: `Throughout the whole North Sea, also reported from the Kattegat. North and South Atlantic Oceans, as far south as Tierra del Fuego; the Mediterranean Sea and Adriatic.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/jellyfish/chrysaoraHysoscella/chrysaora-hysoscella.jpg`
    },
    chrysaoraLactea: {
        id: 7,
        name: `Chrysaora lactea`,
        description: `Exumbrellar surface thickly covered by minute truncate papillae. Tentacles up to 40 in adult, each octant having 5 tentacles, a central primary tentacle (forming earliest and being largest until adult size is reached), two secondaries slightly smaller or same size (?depending on age) laterally, and two, smaller, tertiaries in the spaces between the primary and secondaries, all arising from clefts between lappets. Clefts between tentacular lappets not uniform in depth, those of tertiary marginal tentacles being shallower than those of secondaries, and those of primaries still shallower (see Chrysaora lactea 2); oral arms V-shaped in section, edges slightly frilled, terminal region possibly spiral (data scant). Stomach pouches uniform in width. Radial septa narrow, some widening at inner end either gradually (as in Chrysaora hysoscella), or abruptly with pear-shaped outline (as in Chrysaora plocamia but not so widely).`,
        size: `Diameter recorded up to ca. 25 cm`,
        color: `Coloration little known, so far recorded as uniform, ranging from pale milky-white, or with weak purplish tint, or pale lilac. Brownish-red radial lines, spots and patches on exumbrella recorded in some populations (Mayer, 1910; P.F.S. Cornelius, pers. obs.). Marginal tentacles colorless, once pale reddish-purple (Eschscholtz, 1829). Mouth arms and subumbrellar ostia spotted dark brown.`,
        dangerous: `Sting mild, lasting 30-60 minutes`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/jellyfish/chrysaoraLactea/chrysaora-lactea.png`
    },
    chrysaoraQuinquecirrha: {
        id: 8,
        name: `Chrysaora quinquecirrha`,
        description: `exumbrella smooth; tentacles typically 40 in adult (56 and 72 rarely reported), each octant having a central primary tentacle, two secondaries of intermediate size either side, and a minute tertiary near each side of octant arising beneath rhopalar lappet (i.e. not from a cleft between the lappets); clefts between tentacular lappets uniform in depth; oral arms narrow, V-shaped in section, edges frilled, terminal region not spirally coiled (?); very long, length up to ca. 15 times bell diameter. Radial septa (as seen from below) thin, constant in width, not wider at inner end; outer 1/3 to 1/4 following broad curve (rather than merely bending as in other species).`,
        size: `Diameter to ca. 25 cm`,
        color: `Coloration greatly varied. Some specimens, and/or populations, temporarily or permanently entirely lack radial lines on exumbrella, but others have them. Some are colorless, transparent, whitish yellowish or orange, with mouth-arms of the same colors but not in all specimens the same color as the bell; lappets same color as ground color of bell. Others have variously developed radial streaks, from small radial dashes near centre, to nearly entire radial stripes (? not meeting near centre to form isosceles triangles); pattern possibly never so strongly developed as in some Chrysaora hysoscella and Chrysaora plocamia. Marginal tentacles colorless, yellow, red, or of intermediate color.`,
        dangerous: `Sting painful to severe, medical attention may be needed.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/jellyfish/chrysaoraQuinquecirrha/chrysaora-quinquecirrha.jpg`
    },
    cyaneaCapillata: {
        id: 9,
        name: `Cyanea capillata`,
        description: `Umbrella saucer-shaped with uniformly thick jelly thinning suddenly at bases of marginal lappets; exumbrella with central surface smooth, without prominent nematocyst clusters. Margin with eight deep adradial tentacular clefts, and four perradial and four interradial rhopalar clefts less deep; marginal lappets sloping asymmetrically outwards from the tentacular clefts towards the rhopalar clefts. Marginal tentacles hollow, arranged in up to four complete serial rows, arising from subumbrella surface at a distance from umbrella margin; tentacles in adradial groups of 70-150 or more. Stomach without interradial gastric septa; with many gastric filaments arranged in four interradial groups on subumbrellar wall where central stomach cavity passes into gastrovascular sinus. Gastrovascular sinus divided into sixteen pouches by an equal number of radial septa extending from near the proximal border of coronal muscle to distal margin of umbrella, merging into fused areas of marginal lappets; pouches branched, terminal ramifications without anastomoses. Subumbrella with radial and circular muscles [C.capillata-circular muscle ]. Coronal and radial muscle folds with pit-like intrusions from gastrovascular sinus; 13-15 coronal folds between radial septa. The four oral arms arise from a ring of thickened subumbrellar mesogloea surrounding the base of the manubrium; each arm as long as the umbrella radius and thins out to form membranous lips on either side of a median furrow. Adjacent oral arms connected by a membranous, much-folded curtain about half the length of the arms. The four interradial, very much-folded gonads hang freely down from the subumbrellar surface.`,
        size: `Umbrella usually 300-500 mm, up to 2,000 mm in diameter.`,
        color: `Usually yellowish brown with dark red manubrium (manubrium darkens with age), sometimes paler or almost colourless [C.capillata-habitus ]. Viewed from above the darker pigmentation of stomach and gastrovascular pouches shows up strongly with a clear pattern due to the weakly pigmented radial and ‘false’ septa.`,
        distribution: `Common species in the northern and southern North Sea, usually outnumbered by Cyanea lamarckii. Northern boreal species with circumpolar distribution, possibly cosmopolitan.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/jellyfish/cyaneaCapillata/cyanea-capillata.jpg`
    },
    cyaneaLamarckii: {
        id: 10,
        name: `Cyanea lamarckii`,
        description: `Umbrella saucer-shaped with uniformly thick jelly thinning suddenly at bases of marginal lappets; exumbrella with central surface smooth, with prominent nematocyst clusters. Margin with eight deep adradial tentacular clefts, and four perradial and four interradial rhopalar clefts less deep; marginal lappets sloping asymmetrically outwards from the tentacular clefts towards the rhopalar clefts. Marginal tentacles hollow, arranged in up to four incomplete serial rows, arising from subumbrella surface at a distance from umbrella margin; tentacles in adradial groups of 40-60 alternating with the eight marginal sense organs [C.lamarckii-habitus ]. Stomach without interradial gastric septa; with many gastric filaments arranged in four interradial groups on subumbrellar wall where central stomach cavity passes into gastrovascular sinus. Gastrovascular sinus divided into sixteen pouches by an equal number of radial septa extending from near the proximal border of coronal muscle to distal margin of umbrella, merging into fused areas of marginal lappets; pouches branched, terminal ramifications without anastomoses. Subumbrella with radial and circular muscles [C.lamarckii-circular muscle ]. Coronal and radial muscle folds without, or occasionally with only few, pit-like intrusions from gastrovascular sinus; 16-20 coronal folds between radial septa. The four oral arms arise from a ring of thickened subumbrellar mesogloea surrounding the base of the manubrium; each arm slightly shorter than the umbrella radius and thins out to form membranous lips on either side of a median furrow. Adjacent oral arms connected by a membranous, much-folded curtain about half the length of the arms. The four interradial, very much-folded gonads hang freely down from the subumbrellar surface.`,
        size: `Umbrella 60-150 mm, up to 300 mm in diameter.`,
        color: `Pale yellow to bright blue or deepest violet [C.lamarckii-habitus ], never the deep reddish brown colour of Cyanea capillata. The intensity of the blue might be due to rising temperature; all the darker colouration is in the gastrovascular endoderm and clearly visible through the transparent umbrella.`,
        distribution: `Common throughout the North Sea, including the Skagerrak. More southern species than C. capillata, reported as far north as the Faeroes and Iceland and off the Norwegian coast just north of Bergen; absent from the Baltic. Apart from being reported from the southern coasts of England and Ireland, and the Bay of Biscay, little is known about its southern limits.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/jellyfish/cyaneaLamarckii/cyanea-lamarckii.jpg`
    }
}

module.exports = animals;