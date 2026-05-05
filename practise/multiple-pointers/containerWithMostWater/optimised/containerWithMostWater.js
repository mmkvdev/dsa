/**
 * @param {number[]} height
 * @return {number}
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
var maxArea = function (height) {
  let maxArea = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let area = width * minHeight;
    maxArea = Math.max(area, maxArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
