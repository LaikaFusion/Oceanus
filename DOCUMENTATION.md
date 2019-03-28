# Documentation

## Endpoints 

| Route                                | Description                        |
| ---                                  |---                                 |
| /api/v1/animals                      | Gets all animals                   |
| /api/v1/animals/:species             | Gets all animals of a species      |
| /api/v1/animals/:species/:subspecies | Gets all subspecies of a species   |

When making requests to species or subspecies use a camelCase format like so:

```
/api/v1/animals/crustaceans/crabsAndLobsters
```

camelCase format it has no spaces and each word after the first one is uppercase.

## Species List

List of current species incorporated on the API

* Brachiopods
* Corals
* Sea anemones
* Crustaceans
    - Amphipods
    - Barnacles
    - Crabs and Lobsters
    - Hooded Shrimp
    - Isopods
    - Opossum Shrimp
    - Ostracods
    - Shrimp, Prawn and Krill
    - Water Fleas
    - Other Crustaceans
* Fishes
    - Bony Fish
    - Lampreys and hagfishes
    - Rays, skates and sharks
* Hydrozoans
* Jellyfish and related species
    - Box jellyfish and sea wasps
    - Comb jellyfish
    - Jellyfish
* Lancelets    
* Reptiles

## Schema

Schema of each animal. The ones required will always come up but the ones who aren't are optional.

* id - required
* name - required
* description - required
* img - required
* habitat
* distribution
* color
* remarks
* corallites
* tentacles
* colouration
* reproduction
* nematocystsOfAcotia
* geographicalDistribution
* interestsToFisheries
* type
* size
* ecology
* depthRange
* locality
* specimen
* food
* behavior
* dangerous
* juveniles
* exploitation
* confusedWith
