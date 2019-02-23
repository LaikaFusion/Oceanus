
const animals = {
    carybdeaAlata: {
        id: 1,
        name: `Carybdea alata`,
        description: `Largest carybdeid when full grown, up to 230 mm bell height recorded, but also fertile 1/4 as high. Bell nearly round in cross-section; elongate, height variously reported as 1.2 to 1.7 times width, even twice, proportionaly higher when large; hyaline (glassy), exumbrella lacking nematocyst warts at least when young (some doubt); apex bluntly flat-topped. Pedalia long, scalpel- or lancet-shaped; pedalial canal bent through right-angle at top without diverticulum. Contracted tentacle thick, banded, up to about 1.5 times bell height, tapering for basal ca. 1/6. Rhopalial niche deep, entrance T-shaped, conspicuous, slightly more than 1/4 up from bell edge; entrance with one bluntly pointed flap above and none or two shallow below, their bases together forming an equilateral triangle with the point downwards; possibly shorter and not meeting in young individuals, longer and meeting together in larger ones, but this perhaps an artifact of preservation; possibly some variation in lip-shape. Velarium with 24 short, branching, non-anastomosing velar canals. Manubrium short, lips slightly recurved. Gastric cirri in 4 deeply crescent-shaped areas; a stomach pouch in each gap between leading into radial sinus. One half-gonad on each side of each radial sinus.`,
        color: `jelly notably clear, endoderm translucent, milky white; gastric cirri and flexible parts of tentacles pink to yellow-pink; sensory knobs of rhopalia dull ochre, the ocelli deep brown to nearly black.`,
        dangerous: `sting painful, causing lasting problems but not lethal.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfishAndSeaWasps/carybdeaAlata/carybdea-alata.png`
    },
    chirodropusGorilla: {
        id: 2,
        name: `Chirodropus gorilla`,
        description: `A large, poorly known, cuboid medusa. Bell reported up to ca. 120 mm high and wide, nearly flat-topped, probably without prominent vertical flutings on sides and corners; jelly thick, rigid. Lower part of bell thin, comprising 16 gelatinous lappet-like structures connected by velarium like a web. Velarium wide (1/6 bell height), thin, velarial canals 20+ per quadrant, tortuous, some with major forkings, all with short side-branches. Rhopalia 1/4 way up from bell margin, slit narrow, horizontal to downcurving, lips small. Pedalia 4, inserted along 1/3 of bell height, palmate, one proximal and several paired digitate processes each bearing a tentacle; up to 12 tentacles recorded on each bell corner. Gastric pouches 4, each bearing 2 conspicuous finger-shaped processes hanging down into subumbrellar space, each with numerous digitate to filiform processes on one side (length differing between specimens?). Gonads 4, attached beneath top of subumbrellar cavity, like bunches of grapes in shape. Chirodropus palmatus (Haeckel, 1880) may be conspecific.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfishAndSeaWasps/chirodropusGorilla/chirodropus-gorilla.jpg`
    },
    chiropsalmusQuadrumanus: {
        id: 3,
        name: `Chiropsalmus quadrumanus`,
        description: `Fist-sized, cuboid, transparent, with several tentacles at each corner. Bell robust, nearly as high as wide (1:1.3), slightly rounded but flat on top; diameter to ca. 140 mm; surface smooth. Velarium with numerous branched canals. Rhopalia 4, on sides of bell, in triangular niches ca. 1/6 up from bell margin. Tentacles 24 to ca. 40, each extending up to ca. 3-4 m, banded when contracted, each born on short finger-shaped process inserted on one of 4 palmate pedalia; pedalia robust and inserted on lower 1/3 of bell, bilateral along mid-line. Manubrium 1/2-1/3 bell height, with 4 triangular lips. Stomach wide, round, prolonged into 4 pouches which extend into radial sinuses along bell edges; from each stomach pouch hang two smooth finger-shaped sacs nearly reaching bell margin. Gonads 4, each a thin sheet either side of a radial canal; when mature each extending to meet next laterally.`,
        color: `transparent excepting tentacles, outer 1-2 typically pale mauve, remainder colorless to pale whitish-yellow.`,
        dangerous: `Dangerously venomous, lethal to children`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfishAndSeaWasps/chiropsalmusQuadrumanus/chiropsalmus-quadrumanus.jpg`
    },
    tamoyaHaplonema: {
        id: 4,
        name: `Tamoya haplonema`,
        description: `Bell elongate-cuboid, glassy-transparent in life, somewhat rigid, with flat top; reported to 220 mm long; length: breadth ratio possibly increasing with size. Exumbrella, pedalia and velarium typically, perhaps always, covered with nematocyst warts. Velarium with ca. 10 much-branched but not anastomosing canals in each quadrant. Pedalia 4, length approx. 2/5 of bell height, scalpel-shaped, sharp-edged. Rhopalia 4, complex; entrance to niche a horizontal slit. Tentacles when contracted approx. as long as bell height, with regularly spaced nematocyst bands; extending to ca. 3 m. Stomach occupying up to 1/3 length of bell; gastric cirri in 4 vertical interradial groups (in radii of bell corners). One half-gonad on each side of radial sinus; lamellar with frilled edges, when mature each extending to meet next.`,
        color: `Bell glassy-transparent; exumbrellar warts translucent, spaces between translucence forming characteristic lace-pattern; tentacles milky-yellow; rhopalial photoreceptors brown.`,
        dangerous: `sting painful but not lethal.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfishAndSeaWasps/tamoyaHaplonema/tamoya-haplonema.jpg`
    },
    tripedaliaCystophora: {
        id: 5,
        name: `Tripedalia cystophora`,
        description: `A cuboid medusa 1 cm or more across, with three tentacles at each corner. Bell slightly lower than square in side view, flattened apically, exumbrella covered sparsely with small nematocyst warts. Velarium about 1/6 width of base of bell, with 6 unbranched velar canals per quadrant, triangular in outline. Rhopalia on short stalks in wide niches bordered by rim, about 1/4 to 1/5 up bell. Stomach short, with 4 wide gastrovascular pouches leading into radial canals; manubrium reaching nearly to base of bell; it and mouth cross-shaped in section. Gastric cirri small, tapering, "brush-shaped", arising from a short stalk in each interradial corner of stomach. Three separate pedalia on each corner of bell, length of each about half height of bell, laterally narrow, each with a single tentacle about 2.5 times its length when contracted. Gonads 4, lamellar, each spanning both sides of each radial sinus, extending vertically from bell margin nearly to apex and when mature each reaching neighbour laterally; broods planula larvae.`,
        color: `Medusa including gonads a uniform light yellowish-brown.`,
        img: `${process.env.BASE_ROUTE}/img/jellyfishAndRelatedSpecies/img/boxJellyfishAndSeaWasps/tripedaliaCystophora/tripedalia-cystophora.png`
    }
};

module.exports = animals;