export const translateCount = (count) => {
  const BASE = 10000;
  const MAX = 100000;
  if (count >= MAX) {
    return `${Math.floor(count / BASE)}万`;
  }
  return count;
};
