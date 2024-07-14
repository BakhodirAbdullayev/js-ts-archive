// https://leetcode.com/problems/baseball-game/

/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = function (operations) {
  let arr = [];
  let sum = 0;
  for (let i of operations) {
    if (!Number.isNaN(Number(i))) {
      arr.push(Number(i));
      sum += Number(i);
    } else if (i === "C") {
      sum -= arr[arr.length - 1];
      arr.pop();
    } else if (i === "D") {
      let a = 2 * arr[arr.length - 1];
      sum += a;
      arr.push(a);
    } else if (i === "+") {
      let a = arr[arr.length - 1] + arr[arr.length - 2];
      sum += a;
      arr.push(a);
    }
  }
  return sum;
};
