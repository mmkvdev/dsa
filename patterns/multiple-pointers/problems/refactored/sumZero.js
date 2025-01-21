/**
 * write a function called `sumZero` which accepts a sorted array of integers.
 * the function should find the first pair where the sum is 0
 * return an array that includes both values that sum to zero or undefined if the pair doesn't exist.
 * @param {*} arr
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */

const sumZero = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let sum = arr[start] + arr[end];

    if (sum === 0) {
      return [arr[start], arr[end]];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero[(1, 2, 3)]); // undefined
