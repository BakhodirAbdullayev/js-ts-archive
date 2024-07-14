/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = function (image) {
  for (let i in image) {
    image[i] = repRev(image[i]);
  }
  return image;
};

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function repRev(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i > -1; i--) {
    newArr.push(1 - arr[i]);
  }
  return newArr;
}
