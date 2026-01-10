/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 * @param {*} arr
 * @param {*} n
 * @returns
 */

const maxSubArraySum = (arr, k) => {
  if (arr.length < k) return null;
  let n = arr.length;

  let l = 0,
    r = k - 1,
    maxSum = 0,
    tempSum = 0;

  for (let i = 0; i < k; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;
  while (r < n - 1) {
    tempSum -= arr[l];
    l++;
    r++;
    tempSum += arr[r];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySum([], 4)); // null
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySum([], 4)); // null
