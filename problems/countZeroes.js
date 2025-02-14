// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called countZeroes, which returns the number of zeroes in the array.

const countZeroes = (arr) => {
  let left = 0,
    right = arr.length - 1,
    mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === 0) {
      if (mid === 0 || arr[mid - 1] === 1) {
        return arr.length - mid;
      }
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return 0;
};

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
