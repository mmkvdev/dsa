/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 */
var search = function(nums, target) {
    const pivotIndex = (function () {
        let left = 0, right = nums.length - 1, mid;

        while (left < right) {
            mid = Math.floor((left + right) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    })();

    const binarySearch = (left, right) => {
        let mid;

        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    if (target >= nums[pivotIndex] && target <= nums[nums.length - 1]) {
        return binarySearch(pivotIndex, nums.length - 1);
    } else {
        return binarySearch(0, pivotIndex - 1);
    }
};
