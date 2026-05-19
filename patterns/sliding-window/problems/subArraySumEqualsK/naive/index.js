// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Leetcode: https://leetcode.com/problems/subarray-sum-equals-k/description/

// BRUTE FORCE APPROACH

// TIME COMPLEXITY - O(N^2)
// SPACE COMPLEXITY - O(1)

const subarraySum = (nums, k) => {
  let n = nums.length,
    sum = 0,
    count = 0;
  for (let i = 0; i < n; i++) {
    sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
};

console.log(subarraySum([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3)); // 8
