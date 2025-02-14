/**
 * Given an array of integers numbers,
 * write a function that returns the indices of two integers within the numbers array that sum up to a target integer.
 * The smaller index should appear first.
 */

const pairSum = (arr, target) => {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let targetSum = target - arr[i];
    if (map.has(targetSum) && map.get(targetSum) !== i) {
      return [map.get(targetSum), i];
    }
    map.set(arr[i], i);
  }

  return [];
};

console.log(pairSum([0, 7, 1, 9], 7));
console.log(pairSum([4, 9, 2, 1, 7], 5));
console.log(pairSum([4, 4], 0));
console.log(pairSum([4, 4], 8));
