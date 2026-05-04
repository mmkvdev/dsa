// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

/**
 * Time Complexity - O(n)
 * Space Complexity - O(k), where k is the count of distinct numbers
 */

// Approach 1
const countUniqueValuesWithFreq = (arr) => {
  let uniqFreq = {};

  for (let val of arr) {
    uniqFreq[val] = (uniqFreq[val] || 0) + 1;
  }

  return Object.keys(uniqFreq).length;
};

console.log(countUniqueValuesWithFreq([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValuesWithFreq([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValuesWithFreq([])); // 0
console.log(countUniqueValuesWithFreq([-2, -1, -1, 0, 1])); // 4

// Approach 2
const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;

  let i = 0,
    j = 1;

  while (i < arr.length && j < arr.length) {
    if (arr[i] === arr[j]) j++;
    else if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};

console.log("---- APPROACH 2 ----");
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// Approach 3
const countUniqueValues2 = (arr) => {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};

console.log("---- APPROACH 3 ----");
console.log(countUniqueValues2([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues2([])); // 0
console.log(countUniqueValues2([-2, -1, -1, 0, 1])); // 4
