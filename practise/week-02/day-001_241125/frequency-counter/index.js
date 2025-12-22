// Write a function called `same`, which accepts two arrays.
// The function should return `true` if every value in the array has it's corresponding value squared in the second array.
// The frequency of the values should be the same.
// order of the values doesn't matter

const same = (arr1, arr2) => {
  // check if the length of both the arrays are same, if not just return false
  if (arr1.length !== arr2.length) return false;

  // `obj1` to track values and their frequencies in arr1
  const obj1 = {};

  // `obj2` to track values and their frequencies in arr2
  const obj2 = {};

  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }

  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  // iterate over `obj1`
  for (let key in obj1) {
    // check if any square of a key in `obj1` doesn't exist as a key in `obj2`
    // if the key doesn't exist, return `false`
    if (!(key ** 2 in obj2)) {
      return false;
    }
    // if the key exists
    // check if the frequencies match
    // if they don't, return `false`
    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }

  return true;
};

console.log(same([1, 2, 3], [4, 1, 9])); // true { 1: 1, 2: 1, 3: 1 } | { 4: 1, 1: 1, 9: 1 }
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
console.log(same([10, 2, 8], [64, 100, 4])); // true {10: 1, 2: 1, 8: 1} | {64: 1, 100: 1, 4: 1}
console.log(same([], [])); // true
