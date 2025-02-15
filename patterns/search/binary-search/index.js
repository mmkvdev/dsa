/**
 * Binary Search Implementation
 */

const binarySearch = (arr, target) => {
  let left = 0,
    right = arr.length - 1,
    mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch([1, 4, 6, 7, 9, 10], 4));
console.log(binarySearch([1, 6, 7, 9, 10], 4));
