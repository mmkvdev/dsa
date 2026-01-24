// Max Consective Ones
// Given an array which consists of 1s and 0s and an integer k, task is to return the maximum consecutive 1s given that you’re allowed to flip at most k 0s
// Re-definition: Longest SubArray with maximum k 0s

// BRUTE FORCE APPROACH
// TIME COMPLEXITY - O(n^2)
// SPACE COMPLEXITY - O(1)
const maxConsecutiveOnes = (arr, k) => {
  let maxLen = 0,
    n = arr.length;

  for (let i = 0; i < n; i++) {
    let zeroCount = 0;
    for (let j = i; j < n; j++) {
      if (arr[j] === 0) zeroCount++;
      if (zeroCount <= k) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
      if (zeroCount > k) break;
    }
  }
  return maxLen;
};

console.log(maxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(maxConsecutiveOnes([0, 0, 0, 1, 1, 1, 1], 1)); // 5
console.log(maxConsecutiveOnes([1, 0, 0, 0, 1, 1, 1], 1)); // 4
console.log(maxConsecutiveOnes([1, 0, 1, 0, 1, 0, 1, 0, 1], 2)); // 5
console.log(maxConsecutiveOnes([0, 0, 0, 0], 2)); // 2
