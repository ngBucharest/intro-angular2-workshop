# Intro to Angular 2 workshop

This is an implementation of the Angular 1 tutorial, Phonecat, in Angular 2. It was used for a workshop by AngularJS Bucharest team.

## Requirements
* NodeJS - [https://nodejs.org/](https://nodejs.org/)
* Typings - `sudo npm install -g typings`

## Setup
* `npm install`

## Development
* `npm start` starts a local webserver at `http://localhost:8090` and recompiles / reloads when code is changed.

## Building
* `npm run build` performs a build in the `./build` folder. It uses a separate config file, `webpack.config.prod.js`, to enable different options for the production build versus the development build.

## Resources
* [Angular 2 documentation](https://angular.io/docs/ts/latest/)
* [Angular 2 tutorial - Heroes](https://angular.io/docs/ts/latest/tutorial/)
* [Pete Hunt’s webpack cookbook](https://github.com/petehunt/webpack-howto)