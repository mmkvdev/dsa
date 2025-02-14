/**
 * Given a sorted and rotated array numbers containing unique elements, 
 * find and return the minimum element in this array.
 * Rotating an array [a[0], a[1], a[2], ..., a[n-1]] 
 * once results in [a[n-1], a[0], a[1], a[2], ..., a[n-2]]. 
 * Rotating it a second time results in [a[n-2], a[n-1], a[0], a[1], ..., a[n-3]].

 * Develop an algorithm that runs in O(log n) time complexity.

    * Input
    * numbers: number[]: An array of integers
 */

/**
 * @param {number[]} numbers
 * @return {number}
 */
function smallestInRotatedArray(numbers) {
  let left = 0,
    right = numbers.length - 1,
    mid = 0;

  while (left < right) {
    mid = Math.floor((left + right) / 2);

    if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return numbers[left];
}

console.log(smallestInRotatedArray([1, 2, 3, 4])); // 1
console.log(smallestInRotatedArray([3, 4, 1, 2])); // 1
console.log(smallestInRotatedArray([6, 7, 8, -5, -4, 2])); // -5
