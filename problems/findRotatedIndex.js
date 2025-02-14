/**
 * Write a function called findRotatedIndex
 * which accepts a rotated array of sorted numbers and an integer.
 * The function should return the index of the integer in the array. If the value is not found, return -1.
 * Constraints:
 * Time Complexity - O(log n)
 * Space Complexity - O(1)
 */
function findRotatedIndex(arr, num) {
  const findPivot = () => {
    let left = 0,
      right = arr.length - 1,
      mid = 0;

    while (left < right) {
      mid = Math.floor((left + right) / 2);

      if (arr[mid] > arr[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  };

  const binarySearch = (left, right) => {
    let mid = 0;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);

      if (arr[mid] === num) {
        return mid;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  };

  let pivot = findPivot();

  if (num >= arr[pivot] && num <= arr[arr.length - 1]) {
    return binarySearch(pivot, arr.length - 1);
  } else {
    return binarySearch(0, pivot - 1);
  }
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
