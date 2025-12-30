// NAIVE APPROACH
// Time Complexity - O(n)
// Space Complexity - O(n)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // if length of the input array is 1, return the array as a result
  if (nums.length === 1) return nums;

  // naive approach

  // initialise an array of zeroes of size `n`
  const res = new Array(nums.length).fill(0);
  let pos = 0;

  // traverse the input array and look for non-zero elements and
  for (let val of nums) {
    if (val !== 0) {
      res[pos] = val;
      pos++;
    }
  }

  // copy the temporary array to the original array
  for (let i = 0; i < res.length; i++) {
    nums[i] = res[i];
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([1]));
