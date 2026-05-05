/**
 * @param {number[]} height
 * @return {number}
 * Time Complexity - O(n^2)
 * Space Complexity - O(1)
 */
var maxArea = function (height) {
  let maxArea = 0,
    n = height.length,
    area;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      area = (j - i) * Math.min(height[i], height[j]);
      maxArea = Math.max(area, maxArea);
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
