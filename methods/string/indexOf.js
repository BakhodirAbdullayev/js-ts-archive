"use strict";
/**
 * @param {string} char
 * @returns {number}
 */

function customIndexOf(char) {
  let charLength = char.length;
  let upperLimit = this.length - charLength;

  for (let i = 0; i < upperLimit; i++) {
    let match = true;
    for (let j = 0; j < charLength; j++) {
      if (this[i + j] !== char[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }

  return -1;
}

String.prototype.customIndexOf = customIndexOf;
