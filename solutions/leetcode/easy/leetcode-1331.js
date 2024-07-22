// https://leetcode.com/problems/rank-transform-of-an-array/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = function (arr) {
  const newArr = Array.from(new Set(arr)).sort((a, b) => a - b);
  const obj = {};
  newArr.map((s, i) => {
    obj[s] = i + 1;
  });
  arr = arr.map((i) => obj[i]);
  return arr;
};

console.log(arrayRankTransform([40, 10, 20, 30]));
