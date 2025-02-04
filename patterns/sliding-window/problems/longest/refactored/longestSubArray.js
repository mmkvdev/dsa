/**
 * Given an array, find the longest subarray whose sum matches the given condition: sum <= K
 * E.g., [2, 5, 1, 7, 10]; k -> 14
 * output: [5, 1, 7]
 * Time Complexity - O(N+N)
 * Space Complexity - O(1)
 */

const longestSubArray = (arr, k) => {
  let sum = 0,
    maxLen = 0,
    l = 0,
    r = 0;

  while (r < arr.length) {
    sum = sum + arr[r];

    while (sum > k) {
      sum = sum - arr[l];
      l++;
    }
    if (sum <= k) {
      // [todo]: store the maxlen subarray also
      maxLen = Math.max(maxLen, r - l + 1);
    }
    r++;
  }
  return { maxLen, maxLenSubArray };
};

const arr = [2, 5, 1, 7, 10];
const k = 14;
console.log(longestSubArray(arr, k));
console.log(longestSubArray([5, 6, 7, 8, 8, 9, 9, 9, 9], k));
