export const getNextIndex = (length: number, current: number, addend: number): number => {
  const next = current + addend;

  if (next < 0) {
    return length - Math.abs(next);
  }

  if (next >= length) {
    return 0 + addend - 1;
  }

  return current + addend;

};