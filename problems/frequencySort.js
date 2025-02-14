/**
 * Given an array of integers nums, sort the array in increasing order based on the frequency of the values.
 * If multiple values have the same frequency, sort them in decreasing order.
 * Return the sorted array.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let map = new Map();

  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  return nums.sort((a, b) => map.get(a) - map.get(b) || b - a);
};

// console.log()
console.log(frequencySort([1, 1, 2, 2, 2, 3])); // [3,1,1,2,2,2]
console.log(frequencySort([2, 3, 1, 3, 2])); // [1,3,3,2,2]
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])); // [5,-1,4,4,-6,-6,1,1,1]
