// Write a function called `sumZero` which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
// Input: Sorted Array<integer>
// Output: [-a, a] / undefined

// Optimised (using two pointers)
// Time Complexity - O(n)
// Space Complexity - O(1)

const sumZero = (arr) => {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0)
      right--; // if the sum is a large number, the only way to reduce `sum` is move away from larger numbers, moving `right--` guarantees a smaller number
    else left++; // if your sum is too small, you need a bigger number, moving `left` forward gives you a less negative / more positive value
  }
};

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])); // [-3, 3]
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
