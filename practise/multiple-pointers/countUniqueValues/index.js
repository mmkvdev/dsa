// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Two Pointer + In-place overwrite technique
// Time Complexity - O(n)
// Space Complexity - O(1)
const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0,
    j = 1;
  while (i < arr.length && j < arr.length) {
    if (arr[i] === arr[j]) j++;
    else {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
