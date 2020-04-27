import { KeyboardEvent } from 'react';

export const getRandomInt = (min: number, max: number): number => {
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

  if (min < 0) {
    throw new RangeError(
      'Expected min to be >= 0'
    );
  }
  let byteArray = new Uint32Array(1);
  window.crypto.getRandomValues(byteArray);

  const range = max - min + 1;
  const max_range = 4294967295;
  if (byteArray[0] >= Math.floor(max_range / range) * range) {
    return getRandomInt(min, max);
  }
  return min + (byteArray[0] % range);
};

export const debounceEvent = (callback: (...args: any) => void, delay: number = 250) => {
  let interval: any;
  return (...args: any) => {
    clearTimeout(interval);
    interval = setTimeout(callback, delay, ...args);
  }
};

export const checkNumbers = (e: KeyboardEvent<HTMLInputElement>): void => {
  const key: string | number = e.key || e.keyCode;

  if (key !== 'Spacebar' && key !== ' ' && key !== 32 &&
    (!isNaN(Number(key)) || (key >= 96 && key <= 105) || [',', 188, '.', 110, 190].includes(key) ||
      ['Backspace', 8, 'Delete', 46, 'Tab', 9, 'Escape', 27, 'Enter', 13].includes(key) ||
      (['a', 65, 'c', 67, 'x', 88].includes(key) && (e.ctrlKey === true || e.metaKey === true)) ||
      ['End', 35, 'Home', 36, 'ArrowLeft', 37, 'ArrowUp', 38, 'ArrowRight', 39, 'ArrowDown', 40].includes(key))
  ) {
    return;
  } else {
    e.preventDefault();
  }
};
