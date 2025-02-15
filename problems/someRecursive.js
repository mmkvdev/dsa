/**
 * Write a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the array returns true
 * when passed to the callback. Otherwise it returns false.
 */

const someRecursive = (arr, callback) => {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;

  return someRecursive(arr.slice(1), callback);
};

console.log(someRecursive([1, 25, 3, 3], (ele) => ele % 2 === 0));
