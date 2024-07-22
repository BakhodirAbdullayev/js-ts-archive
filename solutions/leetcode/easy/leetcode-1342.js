// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function (num) {
  let count = 0;
  while (num > 0) {
    if (num % 2 === 1) {
      num--;
    } else num /= 2;
    count++;
  }
  return count;
};
