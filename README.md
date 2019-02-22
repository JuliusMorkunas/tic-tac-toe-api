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
| Linting code              | `npm run lint` |

## Docker

Building an image
```shell
$ docker-compose build
```

Running a container
```shell
$ docker-compose up
```

Stopping a container
```shell
$ docker-compose down
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
