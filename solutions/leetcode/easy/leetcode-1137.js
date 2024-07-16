// https://leetcode.com/problems/n-th-tribonacci-number/
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n === 0) return 0;
  if (n < 3) return 1;
  let a0 = 0,
    a1 = 1,
    a2 = 1,
    an = null,
    count = 2;
  while (count < n) {
    an = a0 + a1 + a2;
    a0 = a1;
    a1 = a2;
    a2 = an;
    count++;
  }
  return an;
};
