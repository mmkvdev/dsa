/**
 * write a function `same` that accepts two arrays
 * The function should return `true` if every value in the array has it's corresponding value squared in the second array.
 * The frequency of the values must match.
 * Naive Approach - O(n^2)
 */

const same = (arr1, arr2) => {
  // return false if arr1 and arr2 have different lengths
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let relativeIndex = arr2.indexOf(arr1[i] ** 2);

    if (relativeIndex === -1) {
      return false;
    }

    arr2.splice(relativeIndex, 1);
  }

  return true;
};

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
