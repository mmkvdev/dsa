/**
 * Given an array, find the longest subarray whose sum matches the given condition: sum <= K
 * E.g., [2, 5, 1, 7, 10]; k -> 14
 * output: [5, 1, 7]
 * Time Complexity - O(N^2)
 * Space Complexity - O(1)
 */

const longestSubArray = (arr, k) => {
  let sum = 0,
    maxLen = 0;
  // generate all possible subarrays
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum <= k) {
        maxLen = Math.max(maxLen, j - i + 1);
      } else if (sum > k) break;
    }
  }

  console.log({ maxLen });
  return maxLen;
};

const arr = [2, 5, 1, 7, 10];
const k = 14;
longestSubArray(arr, k);
longestSubArray([5, 6, 7, 8, 8, 9, 9, 9, 9], k);
