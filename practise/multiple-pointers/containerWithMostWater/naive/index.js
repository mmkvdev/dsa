// 7. Problem: https://leetcode.com/problems/container-with-most-water/description/

// NAIVE APPROACH
// Time Complexity - O(n^2)
// Space Complexity - O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxWater = 0;
  let n = height.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let minHeight = Math.min(height[i], height[j]);
      let width = j - i;
      let area = minHeight * width;

      maxWater = Math.max(maxWater, area);
    }
  }

  return maxWater;
};
