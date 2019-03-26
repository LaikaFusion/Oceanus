# Oceanus

A public open-source API that delivers information of the creatures dwelling in the sea

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Documentation

You can read the documentation [here](DOCUMENTATION.md)

### Prerequisites

What things you need to install the software and how to install them

* [node](https://nodejs.org/en/)
* [yarn](https://yarnpkg.com/en/)


### Installing

A step by step series of examples that tell you how to get a development env running

1. Open your terminal on the root of the project and run the yarn command to install all the node packages.

```
yarn
```

2. Create in the root of the project a file called .env and write this inside the document

```
BASE_ROUTE=http://localhost:3000
```

## Running the tests

Coming soon...

## Deployment

### Running the server in a production environment

The package.json has a script called server that you can run using:

```
yarn server
```

This will run the API using node and mantain it live.

### Running the server in a local environment for tests

The package.json has another command called test-server that you can run using:

```
yarn test-server
```

This will run a nodemon server on your localhost:3000 unless you got an environment variable set up.

## Built With

* [Express](https://expressjs.com/) - The web framework used
* [Morgan](https://www.npmjs.com/package/morgan/v/1.1.1) - HTTP Request Logger
* [CORS](https://github.com/expressjs/cors) - Enable CORS options
* [Dotenv](https://www.npmjs.com/package/dotenv) - Allows the use of environment variables
* [Nodemon](https://nodemon.io/) - Reloads automatically on test servers

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/TheGameFreak720/Oceanus/tags). 

## Authors

* **Luis Alvarez** - *Initial work* - [TheGameFreak720](https://github.com/TheGameFreak720)

See also the list of [contributors](https://github.com/TheGameFreak720/Oceanus/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Thanks to [Lambda School](https://lambdaschool.com/?utm_medium=cpc&utm_source=google&utm_campaign=branded&utm_term=lambda%20school&gclid=CjwKCAjwm-fkBRBBEiwA966fZLQKD6-gkztYNzNLDK7_rjl-7T0nQxYkMO-VA4cduJJBklwUNgU91hoCXNsQAvD_BwE) for inspiration and allowing me to share my project with other students
* [Key to Nature](http://species-identification.org/index.php?groep=Animals&selectie=1&hoofdgroepen_pad=%2C1) for making their info public and letting me share it.