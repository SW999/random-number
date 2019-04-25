# Random number
Experiment: generate a random positive integers in a given range.

Instead of using the unsafe `Math.random()`, *Random number* uses the Web Crypto API in browsers.

![Generate a random positive integers in a given range](../master/src/img/screen.jpg)

[View in action](https://sw999.github.io/projects/random/index.html)

## Technology Stack
* [Parcel](https://parceljs.org/) web application bundler
* [React](https://reactjs.org/) to play with Hooks
* [SASS](https://sass-lang.com/)

## Getting started


* Clone or download repo
* Install dependencies:

```sh
cd random-number
npm i
```


## Usage

* For start:
```sh
npm start
```

Open in a browser http://localhost:1234

* For build:
```sh
npm run build
```
## Tests

```sh
npm run test
```

or

```sh
npx majestic
```

## To do:

- [x] Add "Clear" button
- [x] Add validation text
- [x] Add Header component with tooltip
- [x] Add tests
- [ ] Rewrite to TypeScript
