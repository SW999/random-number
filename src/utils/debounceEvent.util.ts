export const debounceEvent = (callback: (...args: any) => void, delay: number = 250) => {
  let interval: any;
  return (...args: any) => {
    clearTimeout(interval);
    interval = setTimeout(callback, delay, ...args);
  }
};
