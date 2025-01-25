/**
 * Maximum points obtained from `n` cards, and you've to pick up `k` cards from a lot of `n` cards.
 * Condition: you can only pick up from the front and back, can't pick from the middle
 * Time Complexity - O(2*k)
 * Space Complexity - O(1)
 */

function maxPointsCards(arr, k) {
  // we can't pick more than `k` elements
  if (arr.length < k) {
    return null;
  }

  let lSum = 0,
    rSum = 0,
    maxSum = 0,
    rIndex = arr.length - 1;

  for (let i = 0; i < k; i++) {
    lSum += arr[i];
  }

  maxSum = lSum;
  for (let i = k - 1; i >= 0; i--) {
    lSum -= arr[i];
    rSum += arr[rIndex];
    rIndex--;
    maxSum = Math.max(maxSum, lSum + rSum);
  }

  return maxSum;
}

console.log(maxPointsCards([6, 2, 3, 4, 7, 2, 1, 7, 1], 4)); // 16
console.log(maxPointsCards([-2, 9, 10, 11, 6, 8], 3)); // 23
