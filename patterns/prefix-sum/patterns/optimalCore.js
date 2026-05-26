/**
 * Prefix Sum Pattern
 * This is an approach to solve the core idea in a better and cleaner way
 * Given an array: [3, 1, 4, 1, 5, 9, 2], the prefix array is built so that prefix[i] holds the sum of every element from index 0 through index `i`
 * Any range sum `arr[L...R]` is then just `prefix[R] - prefix[L-1]`
 */

// build prefix array
const buildPrefixArray = (arr) => {
  let arrLen = arr.length;
  let prefixArr = new Array(arrLen + 1).fill(0);

  for (let i = 0; i < arrLen; i++) {
    prefixArr[i + 1] = prefixArr[i] + arr[i];
  }

  return prefixArr;
};

// range sum computation
const rangeSum = (prefixArr, l, r) => {
  return prefixArr[r + 1] - prefixArr[l];
};

const arr = [3, 1, 4, 1, 5, 9, 2];
const prefixArr = buildPrefixArray(arr);

console.log(rangeSum(prefixArr, 1, 3)); // 6
console.log(rangeSum(prefixArr, 2, 5)); // 19
