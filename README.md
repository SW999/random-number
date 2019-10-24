# Random number

[View in action](https://sw999.github.io/random-number)

An experiment: generate a random positive integers in a given range.

Instead of using the unsafe `Math.random()`, *Random number* uses the Web Crypto API in browsers.

![Generate a random positive integers in a given range](../master/src/img/screen.jpg)
<p align="center">
  <a href="https://github.com/SW999/random-number/tags">
    <img src="https://img.shields.io/github/v/tag/SW999/random-number.svg?sort=semver" alt="Version">
  </a>
</p>

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

Tab with URL *http://localhost:1234* will be open in a browser.

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
- [ ] Add comments
- [x] Rewrite to TypeScript
- [ ] Fix tests
