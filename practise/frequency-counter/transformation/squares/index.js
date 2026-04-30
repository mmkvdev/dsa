/**
 * write a function `same` that accepts two arrays
 * The function should return `true` if every value in the array has it's corresponding value squared in the second array.
 * The frequency of the values must match.
 * Naive Approach - O(n^2)
 */

/**
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 */
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  // build frequency map for arr2
  let freqMap = {};
  for (let val of arr2) {
    freqMap[val] = (freqMap[val] || 0) + 1;
  }

  for (let key of arr1) {
    let valKey = key ** 2;
    if (!freqMap[valKey]) return false;
    freqMap[valKey]--;
  }

  return true;
};

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false

// { 1: 2, 2: 1 }
