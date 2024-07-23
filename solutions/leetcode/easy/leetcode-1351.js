// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function (grid) {
  let n = 0;
  for (let i of grid) {
    for (let j = i.length - 1; j > -1; j--) {
      if (i[j] < 0) {
        n++;
      } else break;
    }
  }
  return n;
};
