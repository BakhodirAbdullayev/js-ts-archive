// https://leetcode.com/problems/valid-perfect-square/description/

const isPerfectSquare = function (num) {
  let sqrt = Math.sqrt(num);
  return sqrt === Math.trunc(sqrt);
};
