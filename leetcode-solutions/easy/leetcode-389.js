// https://leetcode.com/problems/find-the-difference/description/
const findTheDifference = function (s, t) {
  let set = new Set(s.split(""));

  for (let i = 0; i < t.length; i++) {
    if (!set.has(t[i])) return t[i];
  }
};

findTheDifference("abcd", "abcde");
