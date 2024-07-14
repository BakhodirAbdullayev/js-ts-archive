/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function (s, k) {
  let str = "";
  let count = 0;
  for (let i = 0; i < s.length; i = i + k) {
    let a = s.slice(i, i + k);
    if (count % 2 === 0) {
      str += rs(a);
    } else str += a;
    count++;
  }
  return str;
};

function rs(str) {
  let newStr = "";
  console.log(str);
  for (let i = str.length - 1; i > -1; i--) {
    newStr += str[i];
  }
  return newStr;
}
