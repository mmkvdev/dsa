/**
 * Maximum Consecutive Ones
 * Given an array consisting of 1s and 0s and an integer `k`
 * Return the maximum consecutive ones, given that you're allowed to flip atmost `k` zeros
 * similar like Longest subarray with atmost zeros as `k`
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */

const maxConsecutiveOnes = (arr, k) => {
  if (arr.length < k) {
    return null;
  }

  let l = 0,
    r = 0,
    zeroCounter = 0,
    maxLen = 0;

  while (r < arr.length) {
    // iteratively check where zeroCounter is not greater than threshold
    while (zeroCounter > k) {
      if (arr[l] === 0) zeroCounter--;
      l++;
    }

    if (arr[r] === 0) zeroCounter++;
    if (zeroCounter <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }

    r++;
  }

  return maxLen;
};

console.log(maxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(
  maxConsecutiveOnes(
    [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    3
  )
); // 10
