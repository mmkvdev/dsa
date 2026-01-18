// Longest Subarray with sum <= k, return that subArray

// OPTIMAL APPROACH
// Time Complexity - O(n)
// Space Complexity - O(1)

const longestSubArray = (arr, k) => {
  let l = 0,
    r = 0,
    maxLen = 0,
    sum = 0,
    bestL = 0,
    bestR = -1,
    n = arr.length;

  while (r < n) {
    sum += arr[r];

    if (sum <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
      bestL = l;
      bestR = r;
    } else if (sum > k) {
      sum -= arr[l];
      l++;
    }
    r++;
  }

  return { maxLen, subArray: arr.slice(bestL, bestR + 1) };
};

console.log(longestSubArray([2, 5, 1, 7, 10], 14)); // 3
console.log(longestSubArray([2, 5, 1, 10, 10], 14)); // 3
console.log(longestSubArray([8, 4, 1, 1, 7, 10], 14)); // 4
