const crypto = require('crypto');

// eslint-disable-next-line no-undef
Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length),
  },
});
import { getRandomInt, debounceEvent } from '../../services/utils';

describe('Test for getRandomInt', () => {
  test('1. Should generate random number from 0 to 100', () => {
    const value = getRandomInt(0, 100);

    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(100);
  });

  test('2. Should throw Error for a parameter with string type', () => {
    const error = () => getRandomInt('rr', 100);

    expect(error).toThrowError(new RangeError('Min and max are expected to be numbers'));
  });

  test('3. Should throw Error for equal min and max', () => {
    const error = () => getRandomInt(100, 100);

    expect(error).toThrowError(new RangeError('Expected max to be no less than (min + 1)'));
  });

  test('4. Should throw Error for negative min value', () => {
    const error = () => getRandomInt(-10, 100);

    expect(error).toThrowError(new RangeError('Expected min to be >= 0'));
  });
});

jest.useFakeTimers();

describe('Test for debounceEvent function', () => {
  let func;

  beforeEach(() => {
    func = jest.fn();
  });

  test('1. Should run just once', () => {
    const debouncedFunc = debounceEvent(func, 1000);
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    // fast-forward time
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });

  test('2. Should run with default timeout', () => {
    const debouncedFunc2 = debounceEvent(func);
    debouncedFunc2();
    debouncedFunc2();
    debouncedFunc2();
    // fast-forward time
    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});
