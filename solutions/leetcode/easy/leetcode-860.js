// https://leetcode.com/problems/lemonade-change/
/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function (bills) {
  if (bills[0] > 5) return false;

  const m = {
    5: 0,
    10: 0,
    20: 0,
  };

  for (let i of bills) {
    if (i === 5) {
      m["5"]++;
    } else if (i === 10) {
      if (m["5"] < 1) {
        return false;
      } else {
        m["5"]--;
        m["10"]++;
      }
    } else {
      // if(i === 20)
      if (m["10"] > 0 && m["5"] > 0) {
        m["10"]--;
        m["5"]--;
        m["20"]++;
      } else if (m["5"] > 2) {
        m["5"] = m["5"] - 3;
        m["20"]++;
      } else return false;
    }
  }
  return true;
};
