// https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let max = -1;
  let len = s.length;
  console.log("jel");
  for (let i = 1; i < len; i++) {
    let s1 = sum(s.slice(0, i), "0"),
      s2 = sum(s.slice(i), "1");
    console.log(s1, s2);
    if (max <= s1 + s2) {
      max = s1 + s2;
    }
  }
  return max;
};

function sum(str, num) {
  let sum = 0;
  for (let i of str) {
    if (i == num) {
      sum++;
    }
  }
  return sum;
}

console.log(maxScore("00"));
