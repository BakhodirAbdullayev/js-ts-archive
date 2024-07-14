// https://leetcode.com/problems/license-key-formatting/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const licenseKeyFormatting = function (s, k) {
  let newStr = "";

  let short = "";
  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] !== "-") {
      short = s[i].toLocaleUpperCase() + short;
    }
    if ((short.length === k || i === 0) && short) {
      if (newStr === "") {
        newStr = short;
      } else newStr = short + "-" + newStr;

      short = "";
    }
  }

  return newStr;
};

console.log(licenseKeyFormatting("2-5g-3-J", 2));
