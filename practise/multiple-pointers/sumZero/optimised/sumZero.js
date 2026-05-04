// Write a function called `sumZero` which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.
// Input: Sorted Array<integer>
// Output: [-a, a] / undefined

/**
 * Time Complexity - O(n), because both left and right pointers visit every element once
 * Space Complexity - O(1), as we're using constant variables
 */
const sumZero = (arr) => {
  let sum = -Infinity,
    left = 0,
    right = arr.length - 1;

  while (left < right) {
    sum = arr[left] + arr[right];

    if (sum === 0) return [arr[left], arr[right]];
    else if (sum < 0) left++;
    else if (sum > 0) right--;
  }
};

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])); // [-3, 3]
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
