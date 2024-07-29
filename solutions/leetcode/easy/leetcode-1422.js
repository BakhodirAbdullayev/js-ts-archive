// https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/

/**
 * @param {string} s
 * @return {number}
 */

var maxScore = function (s) {
  let len = s.length;
  if (len === 1) {
    return 1;
  }
  let max = -1;
  for (let i = 1; i < len; i++) {
    let s1 = sum(s.slice(0, i), "0"),
      s2 = sum(s.slice(i), "1");
    if (max <= s1 + s2) {
      max = s1 + s2;
    }
  }
  return max;
};

function sum(str, num) {
  let sum = 0;
  for (let i of str) {
    if (i === num) {
      sum++;
    }
  }
  return sum;
}
