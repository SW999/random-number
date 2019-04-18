const crypto = require('crypto');

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length),
  },
});
import { getRandomInt } from '../../services/utils';

test('Should generate random number from 0 to 100', () => {
  const value = getRandomInt(0, 100);

  expect(value).toBeGreaterThanOrEqual(0);
  expect(value).toBeLessThanOrEqual(100);
});

test('Should throw Error for a parameter with string type', () => {
  const error = () => getRandomInt('rr', 100);

  expect(error).toThrowError(new RangeError('Min and max are expected to be numbers'));
});

test('Should throw Error for equal min and max', () => {
  const error = () => getRandomInt(100, 100);

  expect(error).toThrowError(new RangeError('Expected max to be no less than (min + 1)'));
});

test('Should throw Error for negative min value', () => {
  const error = () => getRandomInt(-10, 100);

  expect(error).toThrowError(new RangeError('Expected min to be >= 0'));
});
