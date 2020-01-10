# Random number

[View in action](https://sw999.github.io/random-number)

An experiment: generate a random positive integers in a given range.

Instead of using the unsafe `Math.random()`, *Random number* uses the Web Crypto API in browsers.

![Generate a random positive integers in a given range](../master/src/img/screen.jpg)
<p align="center">
![screen](https://user-images.githubusercontent.com/3176886/72165995-7c9ff900-33d9-11ea-9665-5fd971a84369.jpg)
</p>

## Technology Stack
* [Parcel](https://parceljs.org/) web application bundler
* [React](https://reactjs.org/) with TypeScript
* [SASS](https://sass-lang.com/)
* [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)

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
