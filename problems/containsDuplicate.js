/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.com/problems/contains-duplicate/
 */
var containsDuplicate = function(nums) {
    let map = {};

    nums.forEach((num) => {
        map[num] = (map[num] || 0) + 1;
    });

    return Object.values(map).some(val => val > 1);
};
