// https://leetcode.com/problems/check-if-it-is-a-straight-line/
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function (coordinates) {
  let dy = coordinates[1][1] - coordinates[0][1],
    dx = coordinates[1][0] - coordinates[0][0];
  let k = dy / dx;
  for (let i = 1; i < coordinates.length - 1; i++) {
    dy = coordinates[i + 1][1] - coordinates[i][1];
    dx = coordinates[i + 1][0] - coordinates[i][0];
    if (dx === 0 && k === Infinity) {
      continue;
    } else if (k !== dy / dx) {
      return false;
    }
  }
  return true;
};
