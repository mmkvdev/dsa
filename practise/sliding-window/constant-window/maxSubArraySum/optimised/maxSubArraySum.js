/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 * @param {*} arr
 * @param {*} n
 * @returns
 */

const maxSubarraySum = (arr, n) => {
  // if length of the array is 0, if n < 0
  if (arr.length === 0 || n < 0) return null;

  let maxSum = -Infinity,
    tempSum = 0;
  let i = 0;
  let j = n - 1;
  let arrLen = arr.length;

  for (let k = 0; k < n; k++) {
    tempSum += arr[k];
  }

  maxSum = tempSum;
  while (j < arrLen - 1) {
    tempSum -= arr[i];
    i++;
    j++;
    tempSum += arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null

const maxSubarraySumIterative = (arr, n) => {
  // if length of the array is 0, if n < 0
  if (arr.length === 0 || n < 0) return null;

  let maxSum = -Infinity,
    tempSum = 0;
  let arrLen = arr.length;

  for (let k = 0; k < n; k++) {
    tempSum += arr[k];
  }

  maxSum = tempSum;
  for (let i = n; i < arrLen; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

console.log(maxSubarraySumIterative([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySumIterative([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySumIterative([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySumIterative([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySumIterative([], 4)); // null
