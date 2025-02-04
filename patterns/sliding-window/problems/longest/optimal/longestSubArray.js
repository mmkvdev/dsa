/**
 * Given an array, find the longest subarray whose sum matches the given condition: sum <= K
 * E.g., [2, 5, 1, 7, 10]; k -> 14
 * output: [5, 1, 7]
 * Time Complexity - O(N+N)
 * Space Complexity -
 */

const longestSubArray = (arr, k) => {
  let sum = 0,
    maxLen = 0,
    l = 0,
    r = 0,
    resultSubarrays = [];

  while (r < arr.length) {
    sum = sum + arr[r];

    if (sum > k) {
      sum = sum - arr[l];
      l++;
    }
    // Check if we found a subarray with the same maximum length
    if (sum <= k) {
      const currentLength = r - l + 1;
      if (currentLength > maxLen) {
        maxLen = currentLength;
        resultSubarrays = [arr.slice(l, r + 1)];
        console.log({ array_1: resultSubarrays });
      } else if (currentLength === maxLen) {
        resultSubarrays.push(arr.slice(l, r + 1));
        console.log({ array_2: resultSubarrays });
      }
    }
    r++;
  }
  return { maxLen, resultSubarrays };
};

const arr = [2, 5, 1, 7, 10];
const k = 14;
console.log(longestSubArray(arr, k));
console.log(longestSubArray([5, 6, 7, 8, 8, 9, 9, 9, 9], k));
