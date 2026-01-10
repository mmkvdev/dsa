// Problem: Given an integer array arr[], find the subarray (containing at least one element) which has the maximum possible sum, and return that sum.

// Time Complexity - O(n^2)
// Space Complexity - O(1)

// Examples:
// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11
// Explanation: The subarray [7, -1, 2, 3] has the largest sum 11.

// Input: arr[] = [-2, -4]
// Output: -2
// Explanation: The subarray [-2] has the largest sum -2.

// Input: arr[] = [5, 4, 1, 7, 8]
// Output: 25
// Explanation: The subarray [5, 4, 1, 7, 8] has the largest sum 25.

const maxSubArraySum = (arr) => {
  let maxEnding = arr[0];
  let res = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEnding = Math.max(maxEnding + arr[i], arr[i]);
    res = Math.max(maxEnding, res);
  }

  return res;
};

console.log(maxSubArraySum([2, 3, -8, 7, -1, 2, 3])); // 11
console.log(maxSubArraySum([-2, -4])); // -2
console.log(maxSubArraySum([5, 4, 1, 7, 8])); // 25
