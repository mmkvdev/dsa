/**
 * Maximum Consecutive Ones
 * Given an array consisting of 1s and 0s and an integer `k`
 * Return the maximum consecutive ones, given that you're allowed to flip atmost `k` zeros
 * similar like Longest subarray with atmost zeros as `k`
 * Time Complexity - O(N^2)
 * Space Complexity - O(1)
 */

const maxConsecutiveOnes = (arr, k) => {
  if (arr.length < k) {
    return null;
  }

  let maxLen = 0,
    zeroCounter;

  for (let i = 0; i < arr.length; i++) {
    zeroCounter = 0;
    for (let j = i; j < arr.length; j++) {
      if (zeroCounter >= k) break;
      if (arr[j] === 0) zeroCounter++;

      maxLen = Math.max(maxLen, j - i + 1);
    }
  }

  return maxLen;
};

console.log(maxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(
  maxConsecutiveOnes(
    [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    3
  )
); // 10
