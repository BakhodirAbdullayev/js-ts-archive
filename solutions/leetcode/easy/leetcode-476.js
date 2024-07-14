"use strict";

/**
 * @param {number} num
 * @return {string}
 */
function demToBin(num) {
  let str = "";
  let int = num;
  while (int > 0) {
    let i = Math.trunc(int / 2);
    let newStr = (int % 2) + str;
    int = i;
    str = newStr;
  }
  return str;
}
// console.log(demToBin(5), "hello"); //'101'

/**
 * @param {string} str
 * @return {number}
 */
function binToDem(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum = sum * 2 + Number(str[i]);
  }
  return sum;
}
// console.log(binToDem("101"), "hello"); //5

/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function (num) {
  if (num < 2) return 1 - num;
  let bin = demToBin(num);
  let newStr = "";
  for (let i = 0; i < bin.length; i++) {
    newStr += 1 - bin[i];
  }
  return binToDem(newStr);
};
console.log(findComplement(5));
