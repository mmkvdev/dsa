// OPTIMISED APPROACH

// Time Complexity - O(n)
// Space Complexity - O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // if length of the input array is 1, return the array as a result
  if (nums.length === 1) return nums;

  // `l` pointer keeps track of where the next non-zero element should be placed
  // `r` pointer iterates over the array to find the non-zero elements.
  let l = 0,
    r = 0;

  // iterate with the `r` pointer
  while (r < nums.length) {
    // swap elements if the `r` pointer finds a non-zero element
    if (nums[r] !== 0) {
      let temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++; // move `l` pointer forward
    }
    r++;
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([1])); // [1]
