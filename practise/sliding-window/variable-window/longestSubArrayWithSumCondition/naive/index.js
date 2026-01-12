// Longest Subarray with sum <= k

// BRUTE FORCE APPROACH
// TC - O(n^2)
// SC - O(1)

const longestSubArray = (arr, k) => {
  let maxLen = 0;

  // generate all subarrays
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum <= k) maxLen = Math.max(maxLen, j - i + 1);
      else if (sum > k) break;
    }
  }
  return maxLen;
};

console.log(longestSubArray([2, 5, 1, 7, 10], 14));
