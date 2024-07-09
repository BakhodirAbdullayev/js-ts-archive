// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

const findDisappearedNumbers = function (nums) {
  let set = new Set(nums);
  let arr = [];
  for (let i = 1; i < nums.length + 1; i++) {
    if (!set.has(i)) {
      arr.push(i);
    }
  }
  return arr;
};
