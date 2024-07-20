// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/description/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function (arr) {
  let max = findMax(arr);
  let nums = [];
  for (let i = 0; i < arr.length; i++) {
    if (max === arr[i]) {
      max = findMax(arr.slice(i + 1));
    }
    nums.push(max);
  }
  return nums;
};
/**
 * @param {number[]} arr
 * @return {number}
 */
function findMax(arr) {
  if (arr.length < 1) return -1;
  return Math.max(...arr);
}
console.log(replaceElements([17, 18, 5, 4, 6, 1]));
