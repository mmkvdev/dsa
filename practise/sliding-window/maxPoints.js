/**
 * Maximum Points You Can Obtain From n Cards
 * Given an array which contains points of n different cards and
 * the task is to pick up k cards from these lot of n cards.
 * The condition is to pick up cards (consecutively) from the front and from the back,
 * not from the middle and the goal is pick up cards that yield maximum points
 * Time Complexity - O(k + k) => O(2k)
 * Space Complexity - O(1)
 */
const maxPoints = (arr, k) => {
  let lSum = 0,
    rSum = 0,
    maxSum = 0,
    rIndex = arr.length - 1;

  // calculate the lSum with the initial window length
  for (let i = 0; i < k; i++) {
    lSum += arr[i];
  }
  maxSum = lSum;

  // calculate the `lSum + rSum`
  for (let i = k - 1; i >= 0; i--) {
    lSum = lSum - arr[i];
    rSum += arr[rIndex];
    maxSum = Math.max(maxSum, lSum + rSum);
    rIndex--;
  }
  return maxSum;
};

maxPoints([6, 2, 3, 4, 7, 2, 1, 7, 1], 4);
