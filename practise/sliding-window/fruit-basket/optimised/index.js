// Fruit Into Baskets
// Re-definition: Maximum Length Subarray with at-most 2 types of numbers
// https://leetcode.com/problems/fruit-into-baskets/description/

// TIME COMPLEXITY - O(n)
// SPACE COMPLEXITY - O(1)

const totalFruit = function (fruits) {
  let l = 0,
    r = 0,
    maxLen = 0,
    n = fruits.length,
    k = 2,
    fruitMap = new Map();

  while (r < n) {
    fruitMap.set(fruits[r], (fruitMap.get(fruits[r]) || 0) + 1);

    if (fruitMap.size <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }

    if (fruitMap.size > k) {
      fruitMap.set(fruits[l], fruitMap.get(fruits[l]) - 1);

      if (fruitMap.get(fruits[l]) === 0) {
        fruitMap.delete(fruits[l]);
      }
      l++;
    }
    r++;
  }

  return maxLen;
};

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])); // 5 -> [1, 2, 1, 1, 2]
