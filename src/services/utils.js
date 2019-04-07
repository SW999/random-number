export const getRandomInt = (min, max) => {
  if (isNaN(Number(min)) || isNaN(Number(max))) {
    throw new RangeError(
      'Min and max are expected to be numbers'
    );
  }
  if (min === max) {
    throw new RangeError(
      'Expected max to be no less than (min + 1)'
    );
  }

  let _min = Number(min);
  let _max = Number(max);

  if (_min < 0) {
    throw new RangeError(
      'Expected min to be >= 0'
    );
  }
  let byteArray = new Uint32Array(1);
  window.crypto.getRandomValues(byteArray);

  const range = _max - _min + 1;
  const max_range = 4294967295;
  if (byteArray[0] >= Math.floor(max_range / range) * range) {
    return getRandomInt(_min, _max);
  }
  return _min + (byteArray[0] % range);
};

export const debounceEvent = (callback, time = 250, interval) =>
  (...args) =>
    clearTimeout(interval, interval = setTimeout(callback, time, ...args));
