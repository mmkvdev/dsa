/**
 * @param {number[]} fruits
 * @return {number}
 * TIME COMPLEXITY - O(N^2)
 * SPACE COMPLEXITY - O(1)
 */
var totalFruit = function (fruits) {
  let maxLen = 0,
    fruitSet,
    n = fruits.length,
    FRUIT_TYPE_THRESHOLD = 2;

  for (let i = 0; i < n; i++) {
    fruitSet = new Set();
    for (let j = i; j < n; j++) {
      fruitSet.add(fruits[j]);
      if (fruitSet.size <= FRUIT_TYPE_THRESHOLD) {
        maxLen = Math.max(maxLen, j - i + 1);
      } else {
        break;
      }
    }
  }

  return maxLen;
};

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])); // 5 -> [1, 2, 1, 1, 2]
