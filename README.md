# API Project: freeCodeCamp File Metadata [![Build Status](https://img.shields.io/travis/zsoltime/fcc-api-file-metadata.svg?style=flat-square)](https://travis-ci.org/zsoltime/fcc-api-file-metadata)

This is my file metadata microservice for [freeCodeCamp's last API project][fcc-link]. Demo is available on [my site][demo]. You can also check out [my other freeCodeCamp projects][projects].

## User Stories

- [x I can submit a form object that includes a file upload.
- [x] The form file input field has the `name` attribute set to `upfile`. We rely on this in testing.
- [x] When I submit something, I will receive the file name, and size in bytes within the JSON response.

## Example Usage

`POST` a file to the `/api/filedata` endpoint or go to the [main page][demo] and upload a file using the provided form.

### Example output:

```json
{
  "name": "dnd.gif",
  "type": "image/gif",
  "size": 1256227
}
```

## Tools Used

- [ESLint](https://github.com/eslint/eslint) linter with Airbnb's [base config](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [Express.js](https://github.com/expressjs/express) framework
- [Multer](https://github.com/expressjs/multer) middleware to handle form data
- [Jest](https://github.com/facebook/jest) test framework
- [Pug](https://github.com/pugjs/pug) template engine
- [Supertest](https://github.com/visionmedia/supertest/) library

## Install and Build

#### Clone this repo

```bash
git clone https://github.com/zsoltime/fcc-api-file-metadata.git
cd fcc-api-file-metadata
```

#### Install dependencies

```bash
npm install
```

#### Start dev server

It starts a dev server, monitor for changes and restarts on any change.

```bash
npm run dev
```

#### Start

It starts the node.js application.

```bash
npm start
```

#### Run tests

It runs tests using Jest and Supertest.

```bash
npm test
```

[demo]: https://zsolti.me/apis/file-metadata
[fcc-link]: https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice
[projects]: https://github.com/zsoltime/freeCodeCamp
