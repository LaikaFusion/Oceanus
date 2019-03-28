
const animals = {
    greenTurtle: {
        id: 1,
        name: `Green turtle (Actinia equina)`,
        description: `Animal covered by a heavy shell that consists of an upper and lower part. Upper part with central, four costal and bordering plates. The first costal plate does not touch the nuchal. Shell brown to dark brown. Shell plates lie side by side, not overlapping. Head with two pairs of plates between the eyes and four plates behind the eye.`,
        size: `They are large, usually 1.5 m in length and a mass of 205 kg, on average.`,
        colouration: `Shell brown to dark brown.`,
        habitat: `Young Green turtles are omnivorous, feeding both on plant and animal material. As adults, they are strictly herbivorous. They spent their lives mostly in the water. Only females come ashore to nest; males rarely return to land after crawling into the sea as hatchlings. Males and females mature between 10 and 24 years. Most females return to nest on the beach where they were born. A female will not nest in consecutive years, typically skipping one or two years before returning.`,
        distribution: `Once abundant in the Caribbean, but due to overharvesting quite rare.`,
        img: `${process.env.BASE_ROUTE}/img/reptiles/img/greenTurtle/green-turtle.jpg`
    },
    greenTurtle: {
        id: 2,
        name: `Hawksbill turtle (Eretmochelys imbriocota)`,
        description: `Animal covered by a heavy shell that consists of an upper and lower part. Upper part with central, four costal and bordering plates. The first costal plate does not touch the nuchal. Shell yellow-brown with fan-like markings and overlapping plates. Rear border plates usually have a serrated edge. Head with an overhanging upper beak. One pair of plates between the eyes and three plates behind the eye.`,
        size: `They are medium sized, usually 90 cm in length and a mass of 45 kg, on average.`,
        colouration: `Shell yellow-brown with fan-like markings`,
        habitat: `The Hawksbill turtle is omnivorous, feeding both on plant and animal material. They spent their lives mostly in the water. Only females come ashore to nest; males rarely return to land after crawling into the sea as hatchlings. Most females return to nest on the beach where they were born. A female will not nest in consecutive years, typically skipping one or two years before returning.`,
        distribution: `Common Caribbean.`,
        img: `${process.env.BASE_ROUTE}/img/seaAnemones/img/beadletAnemone/beadlet-anemone.jpg`
    },
};

module.exports = animals;