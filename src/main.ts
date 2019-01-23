/**
 * Adds @param toAdd to bounded @param n
 * example: addN(8)(13) returns 21
 */
export const addN = (n: number): ((toAdd: number) => number) => (
  toAdd: number
): number => n + toAdd;
