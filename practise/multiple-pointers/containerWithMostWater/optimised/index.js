// 7. Problem: https://leetcode.com/problems/container-with-most-water/description/
// Time Complexity - O(n)
// Space Complexity - O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0,
    j = height.length - 1;
  let maxArea = 0;

  // move pointers inwards
  while (i <= j) {
    // distance between the two lines
    let width = j - i;

    // height (focusing on the shorter wall to avoid slant/leaks)
    let minHeight = Math.min(height[i], height[j]);

    // area of the container water
    let area = width * minHeight;

    // compute maxArea
    maxArea = Math.max(maxArea, area);

    // move the pointer pointing to the shorter height
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxArea;
};
