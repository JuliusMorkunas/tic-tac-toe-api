# Tic Tac Toe API

[![License][license-badge]][license-url]

> Tic Tac Toe Action Logging API.

## Development

* Cloning the repo

```shell
$ git clone https://github.com/julykaz/tic-tac-toe-api.git
```

* Installing dependencies

```shell
$ npm install
```

* Running scripts

| Action                    | Usage          |
| ------------------------- | -------------- |
| Starting development mode | `npm start`    |
| Running tests             | `npm test`     |
| Linting code              | `npm run lint` |

* Developing in Docker container

```shell
$ docker-compose --file docker-compose.develop.yml up --build
```

## Docker production build

```shell
$ docker-compose up --build
```

## Rest API

### Actions Service

| Method | Endpoint       | Description                 |
| ------ | -------------- | --------------------------- |
| GET    | /api/actions   | Retrieves a list of actions |
| POST   | /api/actions   | Adds new action             |
| DELETE | /api/actions   | Deletes actions             |

## Postman

* postman/tic-tac-toe-api.postman.json

## Licensing

MIT License

[license-badge]: https://img.shields.io/github/license/robertoachar/docker-express-mongodb.svg
[license-url]: https://opensource.org/licenses/MIT
