/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 * @param {*} arr
 * @param {*} n
 * @returns
 */
// Time Complexity - O(n)
// Space Complexity - O(1)

// OPTIMISED FORCE APPROACH\
const maxSubarraySum = (arr, num) => {
  // if length of the array is 0, if n < 0
  if (arr.length === 0 || num < 0 || arr.length < num) return null;

  let maxSum = 0,
    tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};
