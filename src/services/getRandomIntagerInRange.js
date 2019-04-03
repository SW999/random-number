export const getRandomInt = (min, max) => {
  let byteArray = new Uint32Array(1);
  window.crypto.getRandomValues(byteArray);

  const range = max - min + 1;
  const max_range = 4294967295;
  if (byteArray[0] >= Math.floor(max_range / range) * range) {
      return getRandomInt(min, max);
  }
  return min + (byteArray[0] % range);
}
