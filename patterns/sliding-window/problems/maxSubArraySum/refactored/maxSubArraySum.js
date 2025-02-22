/**
 * Write a function called `maxSubArraySum` which accepts an array of integers and a number called n
 * The function should calculate the maximum sum of `n` consecutive elements in the array.
 * Time Complexity - O(N)
 */

const maxSubArraySum = (arr, num) => {
  if (arr.length < num) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

const maxSubArraySum2 = (arr, num) => {
  if (arr.length < num) {
    return null;
  }
  let l = 0,
    r = num - 1,
    maxSum = 0,
    tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  while (r < arr.length - 1) {
    tempSum -= arr[l];
    l++;
    r++;
    tempSum += arr[r];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySum([], 4)); // null

console.log(maxSubArraySum2([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum2([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum2([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum2([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySum2([], 4)); // null
