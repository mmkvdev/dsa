/**
 * Given an unsorted array and a number n,
 * find if there exists a pair of elements in the array whose difference is n.
 * This function should return true if the pair exists or false if it does not.
 */

// TC - O(n) | SC - O(n)
const findPair = (arr, n) => {
  const set = new Set();

  for (let item of arr) {
    if (set.has(item + n) || set.has(item - n)) {
      return true;
    }

    set.add(item);
  }

  return false;
};

const findPairDifference = (arr, n) => {
  arr.sort((a, b) => a - b);
  let i = 0,
    j = 1;

  console.log(arr);
  while (j < arr.length && i < arr.length) {
    // console.log({ arr, i, j, test: arr[j], check: arr[i] }, j, n);
    let diff = arr[j] - arr[i];

    if (diff === n) return true;
    else if (diff < n) j++;
    else i++;
  }

  return false;
};

console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true

console.log("optimised approach");
console.log(findPairDifference([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPairDifference([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPairDifference([4, -2, 3, 10], -6)); // true
console.log(findPairDifference([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPairDifference([], 0)); // false
console.log(findPairDifference([5, 5], 0)); // true
console.log(findPairDifference([-4, 4], -8)); // true
console.log(findPairDifference([-4, 4], 8)); // true
console.log(findPairDifference([1, 3, 4, 6], -2)); // true
console.log(findPairDifference([0, 1, 3, 4, 6], -2)); // true
