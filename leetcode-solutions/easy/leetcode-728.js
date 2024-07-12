// https://leetcode.com/problems/self-dividing-numbers/description/
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function (left, right) {
  let arr = [];
  while (left <= right) {
    if (isSelf(left)) {
      arr.push(left);
    }
    left++;
  }
  return arr;
};

/**
 * @param {number} num
 * @returns {boolean}
 */
function isSelf(num) {
  let str = String(num);
  for (let i = 0; i < str.length; i++) {
    if (num % str[i] !== 0) return false;
  }
  return true;
}
