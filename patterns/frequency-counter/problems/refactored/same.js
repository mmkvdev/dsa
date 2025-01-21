/**
 * write a function `same` that accepts two arrays
 * The function should return `true` if every value in the array has it's corresponding value squared in the second array.
 * The frequency of the values must match.
 * Optimised Approach - O(n)
 */

const same = (arr1, arr2) => {
  // return false if array lengths don't match
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // {a: 1, b: 2}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // return false if key^2 doesn't exist in the frequencyCounter1
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    // frequency test
    // return false if key^2 of frequencyCounter2 doesn't match the key of frequencyCounter1
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
