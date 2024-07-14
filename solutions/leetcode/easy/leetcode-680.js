// https://leetcode.com/problems/valid-palindrome-ii/

// ---------- Worst time complexity
// /**
//  * @param {string} str
//  * @return {boolean}
//  */
// const isPalindrome = (str) => {
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// const validPalindrome = function (s) {
//   if (isPalindrome(s)) return true;

//   let str = null;
//   for (let i = 0; i < s.length; i++) {
//     str = s.slice(0, i) + s.slice(i + 1);
//     if (isPalindrome(str)) return true;
//   }
//   return false;
// };
