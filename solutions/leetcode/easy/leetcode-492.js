// https://leetcode.com/problems/construct-the-rectangle/description/

/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = function (area) {
  let sqrt = Math.sqrt(area);
  if (sqrt === Math.trunc(sqrt)) return [sqrt, sqrt];
  let min = [area, 1];
  for (let i = 2; i < sqrt + 1; i++) {
    if (area % i === 0) {
      let l = area / i;
      if (Math.abs(l - i) < Math.abs(min[0] - min[1])) {
        min[0] = l;
        min[1] = i;
      }
    }
  }
  return min.sort((a, b) => b - a);
};
