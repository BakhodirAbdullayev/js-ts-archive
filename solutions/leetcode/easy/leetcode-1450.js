// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;
  let i = 0;
  while (i < startTime.length) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      count++;
    }
    i++;
  }
  return count;
};
