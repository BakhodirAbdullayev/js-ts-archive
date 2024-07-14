// https://leetcode.com/problems/transpose-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = (matrix) => {
  let arr = [];
  let cols = matrix[0].length;
  let rows = matrix.length;
  for (let i = 0; i < cols; i++) {
    arr[i] = [];
    for (let j = 0; j < rows; j++) {
      arr[i][j] = matrix[j][i];
    }
  }
  return arr;
};
