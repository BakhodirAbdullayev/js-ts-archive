// https://leetcode.com/problems/backspace-string-compare/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
  return remover(s) === remover(t);
};

/**
 * @param {string} str
 * @returns {string}
 */
function remover(str) {
  const arr = [];
  for (let i of str) {
    if (i === "#") {
      arr.pop();
    } else arr.push(i);
  }
  return arr.join("");
}
