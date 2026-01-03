/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 * @param {*} arr
 * @param {*} n
 * @returns
 */
// Time Complexity - O(n1 * n2)
// Space Complexity - O(1)

// BRUTE FORCE APPROACH
const maxSubarraySum = (arr, n) => {
  // if length of the array is 0, if n < 0
  if (arr.length === 0 || n < 0) return null;

  let maxSum = -Infinity;

  // iterate over the array
  for (let i = 0; i < arr.length - n + 1; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += arr[i + j];
    }
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
