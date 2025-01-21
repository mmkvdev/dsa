/**
 * Implement a function `countUniqueValues` which accepts a sorted array, and counts the unique values in the array.
 * there can be negative values also in the array, but it's always sorted.
 * Time Complexity O(n)
 * Space Complexity O(1)
 */

const countUniqueValues = (arr) => {
  let i = 0,
    j = 1;

  while (i < arr.length && j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return arr.slice(0, i + 1).length;
};

console.log(countUniqueValues([1, 2, 3, 3, 4, 5])); // 5

console.log(countUniqueValues([])); // 0

console.log(countUniqueValues([-12, -3, -3, 4, 5])); // 4
