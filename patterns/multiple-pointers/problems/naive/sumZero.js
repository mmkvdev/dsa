/**
 * write a function called `sumZero` which accepts a sorted array of integers.
 * the function should find the first pair where the sum is 0
 * return an array that includes both values that sum to zero or undefined if the pair doesn't exist.
 * @param {*} arr
 * Time Complexity - O(n^2)
 * Space Complexity - O(1)
 */
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero[(1, 2, 3)]); // undefined
