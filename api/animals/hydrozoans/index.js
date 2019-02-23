
const animals = {
    abylaBicarinata: {
        id: 1,
        name: `Abyla bicarinata`,
        description: `
        Wide anterior nectophore with lateral ridges defining wing-like processes, and edges of facets rounded. No transverse ridge between ventral and apico-ventral facets. Posterior nectophore as wide as it is long. Comb with 4 to 7 teeth; strong ostial teeth.`,
        img: `${process.env.BASE_ROUTE}/img/hydrozoans/img/abylaBicarinata/abyla-bicarinata.png`
    },
    abylaHaeckeli: {
        id: 2,
        name: `Abyla haeckeli`,
        description: `Anterior nectophore as wide as it is long, without wing-like processes. Transverse ridge separates ventral facet from apico-ventral one. Posterior nectophore with up to 5 teeth on comb. Lateral ostial teeth closer to dorsal tooth than to ventral ones.`,
        img: `${process.env.BASE_ROUTE}/img/hydrozoans/img/abylaHaeckeli/abyla-haeckeli.png`
    },
    abylaTrigona: {
        id: 3,
        name: `Abyla trigona`,
        description: `Anterior nectophore as broad as it is wide, with most ridges heavily, but irregularly, serrated. Ventral facet not separated, by a transverse ridge, from apico-ventral one. Posterior nectophore with from 4 to 11 teeth on comb. Two rows of teeth on basal margin of right ventral wing. Ostial teeth heavily serrated.`,
        img: `${process.env.BASE_ROUTE}/img/hydrozoans/img/abylaTrigona/abyla-trigona.png`
    },
    abylopsisEschscholtzi: {
        id: 4,
        name: `Abylopsis eschscholtzi`,
        description: `Dorsal and ventral facets of anterior nectophore relatively more regularly pentagonal and of nearly equal size. Strongly serrated ridges. Lateral radial canals on nectosac without ascending loop. Posterior nectophore less than twice as long as wide, with relatively large apical apophysis. Dorsal facet of cuboidal bract forms a regular pentagon; apico-lateral facets rectangular.`,
        img: `${process.env.BASE_ROUTE}/img/hydrozoans/img/abylopsisEschscholtzi/abylopsis-eschscholtzi.png`
    },
    abylopsisTetragona: {
        id: 5,
        name: `Abylopsis tetragona`,
        description: `Dorsal and ventral facets of anterior nectophore relatively less regularly pentagonal. Ridges less strongly serrated. Lateral radial canals on nectosac with ascending loop. Posterior nectophore 3 times as long as wide. Two conspicuous basal teeth. Dorsal facet of bract elongate and less regularly pentagonal; apico-lateral facets trapezoidal.`,
        img: `${process.env.BASE_ROUTE}/img/hydrozoans/img/abylopsisTetragona/abylopsis-tetragona.png`
    },
    aeginaCitrea: {
        id: 6,
        name: `Aegina citrea`,
        description: `Umbrella up to 50 mm, mesoglea thick at apex; 4 tentacles; 4 lappets with numerous statocysts; 5 or 6-rayed specimens frequent.`,
        img: `${process.env.BASE_ROUTE}/img/hydrozoans/img/aeginaCitrea/aegina-citrea.png`
    },
    aeginuraGrimaldii: {
        id: 7,
        name: `Aeginura grimaldii`,
        description: `Umbrella up to 45 mm; manubrial pouches with slight secondary division; 3-5 secondary marginal tentacles in each octant, 1 or 2 statocysts between each secondary tentacle. Colour of manubrium deep chocolate to purplish black.`,
        img: `${process.env.BASE_ROUTE}/img/hydrozoans/img/aeginuraGrimaldii/aeginura-grimaldii.png`
    },
    aequoreaCoerulescens: {
        id: 8,
        name: `Aequorea coerulescens`,
        description: `About 100 radial canals, 3-6 times as many tentacles; tentacle bulbs laterally compressed. Umbrella up to 145 mm wide, usually 60-80 mm, low and thick manubrium, about half as wide as umbrella; gonads extending along almost whole length of radial canals; numerous small bulbs; all bulbs with excretory papillae; statocysts numerous, crowded.`,
        img: `${process.env.BASE_ROUTE}/img/hydrozoans/img/aequoreaCoerulescens/aequorea-coerulescens.png`
    },
    aequoreaConica: {
        id: 9,
        name: `Aequorea conica`,
        description: `Gonads no more than half as long as radial canals. Umbrella 9 mm wide, 10-12 mm high, conical, with very thick mesoglea; manubrium half as wide as umbrella diameter, often broad and flat; mouth with long and slender lips with inward furrow which continues along inside of manubrium to radial canals; about 16 radial canals, twice as many tentacles (20-30), and as many small bulbs, both without excretory papillae or pores; about twice as many statocysts as tentacles; gonads laterally compressed, in proximal half of radial canals.`,
        img: `${process.env.BASE_ROUTE}/img/hydrozoans/img/aequoreaConica/aequorea-conica.png`
    },
    aequoreaForskalea: {
        id: 10,
        name: `Aequorea forskalea`,
        description: `Adult umbrella large; saucer shaped, thick in centre, gradually thinning towards margin. Stomach usually half as wide as disc. Radial canals usually 60-80, but sometimes fewer or up to 160; with gonads along almost their whole length. Tentacles usually fewer than radial canals but varied from half to twice as many. Marginal bulbs few, scattered; tentacle bulbs elongate-conical [A.forskalea-marg ]; excretory pores on short papillae; 5-10 statocysts between adjacent radial canals. [After Kramp, 1961, and Russell, 1970b].`,
        size: `Umbrella up to ca 175 mm across.`,
        ecology: `Reproductive season unclear owing to difficulties of identification.`,
        depthRange: `Coastal to offshore.`,
        distribution: `Not reported from the North Sea; might enter the SW North Sea from the eastern Channel. Probably throughout Atlantic and Indo-Pacific Oceans in all suitable temperate to tropical waters, occurring occasionally even in mid-ocean (e.g. W of Azores, in Kramp, 1961: 205; Pagès, 1991). In Atlantic Ocean said to occur N to Norwegian Sea. [After Kramp, 1961, and Russell, 1970b].`,
        remarks: `Russell, 1953a described developmental details of the meduse in relation to bell diameter.`,
        img: `${process.env.BASE_ROUTE}/img/hydrozoans/img/aequoreaForskalea/aequorea-forskalea.jpg`
    },
    aequoreaMacrodactyla: {
        id: 11,
        name: `Aequorea macrodactyla`,
        description: `Tentacle bulbs broad, each with abaxial keel and prominent excretory papillae. Umbrella up to 75 mm wide, lens-shaped, central disk thick, margin thin; manubrium about half as wide as umbrella; 60-100 (up to 150) radial canals; gonads extending along almost entire length of radial canals; 10-30 (rarely up to 40) tentacles, 6-8 times as many small rudimentary bulbs; statocysts very numerous.`,
        img: `${process.env.BASE_ROUTE}/img/hydrozoans/img/aequoreaMacrodactyla/aequorea-macrodactyla.png`
    },
    aequoreaPensilis: {
        id: 12,
        name: `Aequorea pensilis`,
        description: `Tentacle bulbs with long lateral extensions, without excretory papillae. Umbrella up to 100 mm wide, more or less biconvex, with thin margin; manubrium 1/2-2/3 as wide as umbrella; gonads extending along almost entire length of manubrium; 150-250 radial canals; 10-16 tentacles and as many small rudimentary bulbs, no excretory papillae but excretory pores present as slits; statocysts very numerous.`,
        img: `${process.env.BASE_ROUTE}/img/hydrozoans/img/aequoreaPensilis/aequorea-pensilis.png`
    },
    aequoreaVitrina: {
        id: 13,
        name: `Aequorea vitrina`,
        description: `Umbrella saucer-shaped, thick in centre, gradually thinning towards margin. Stomach about half width of disc. Radial canals 60-100; gonads extending along almost their entire length. Tentacles more than three times as numerous as radial canals; with a few small marginal bulbs. Tentacle bulbs elongate, slightly laterally compressed, with excretory papillae [A.vitrina-margin ]. Statocysts usually 1-2 between successive radial canals, each with 2-4 concretions. [After Kramp, 1961, and Russell, 1970b].`,
        size: `Diameter of umbrella in adult 100-170 mm.`,
        color: `Appearance reportedly violet-blue fluorescent (Hamond, 1957).`,
        ecology: `Reproductive season: the medusa has been recorded in nearly all months in British waters (Russell, 1953a).`,
        depthRange: `Probably coastal`,
        distribution: `Known occasionally from Belgium (Rappé, 1989), W off Jutland and Helgoland. Probably widespread around the British Isles; like Aequorea forskalea, sparse around mainland Scotland (Fraser, 1972).`,
        img: `${process.env.BASE_ROUTE}/img/hydrozoans/img/aequoreaVitrina/aequorea-vitrina.jpg`
    },
    agalmaElegans: {
        id: 14,
        name: `Agalma elegans`,
        description: `Pneumatophore [A.elegans-top ]: small, ovoid, usually with red-pigmented cap. Nectophore [Agalma elegans ]: with large truncated lateral processes which surround the nectosomal stem. Latero-vertical ridge runs perpendicularly up from the infra-lateral ridge and delimits a triangular facet apical ridge and runs along side of nectophore in its distal half. Bracts: thin and leaf-like, ending in three small projections. The siphonosomal stem is highly contractile. Juveniles [A.elegans-juv ]: the post-larva, or Athorybia stage, bears 4-6 small, thick triangular larval bracts with serrated edge below which is a single gastrozooid.`,
        color: `Pneumatophore with red-pigmented cap.`,
        size: `Nectophore: up to 7 mm in length. Post-larva is usually less than 4 mm in length.`,
        depthRange: `In the W Atlantic known from deeper waters.`,
        distribution: `Mainly known from the northern North Sea in the W English Channel; possibly in the southern North Sea. Cosmopolitan in the World’s oceans, but records are infrequent. Its presence in shallower waters probably is associated with the incursions of oceanic waters on to the continental Shelf.`,
        img: `${process.env.BASE_ROUTE}/img/hydrozoans/img/agalmaElegans/agalma-elegans.jpg`
    }
};

module.exports = animals;