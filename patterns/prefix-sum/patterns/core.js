/**
 * Prefix Sum Pattern
 * This is an approach to solve the core idea
 * Given an array: [3, 1, 4, 1, 5, 9, 2], the prefix array is built so that prefix[i] holds the sum of every element from index 0 through index `i`
 * Any range sum `arr[L...R]` is then just `prefix[R] - prefix[L-1]`
 */

// build prefix array
const buildPrefixArray = (arr) => {
  let arrLen = arr.length;
  let prefixArr = new Array(arrLen).fill(0);
  prefixArr[0] = arr[0];

  for (let i = 1; i < arrLen; i++) {
    prefixArr[i] = prefixArr[i - 1] + arr[i];
  }

  return prefixArr;
};

// range sum computation
const rangeSum = (prefixArr, l, r) => {
  if (l === 0) return prefixArr[r];
  return prefixArr[r] - prefixArr[l - 1];
};

const arr = [3, 1, 4, 1, 5, 9, 2];
const prefixArr = buildPrefixArray(arr);

console.log(rangeSum(prefixArr, 1, 3)); // 6
console.log(rangeSum(prefixArr, 2, 5)); // 19
