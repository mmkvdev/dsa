// Longest Subarray with sum <= k

// OPTIMISED APPROACH
// Time Complexity - O(n + n) => O(2n)
// Space Complexity - O(1)

const longestSubArray = (arr, k) => {
  let l = 0,
    r = 0,
    sum = 0,
    maxLen = 0,
    n = arr.length;
  while (r < n) {
    sum += arr[r];
    while (sum > k) {
      sum -= arr[l];
      l++;
    }
    if (sum <= k) maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }

  return maxLen;
};

console.log(longestSubArray([2, 5, 1, 7, 10], 14)); // 3
