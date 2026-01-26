// Fruit Into Baskets
// Re-definition: Maximum Length Subarray with at-most 2 types of numbers
// https://leetcode.com/problems/fruit-into-baskets/description/

// TIME COMPLEXITY - O(n)
// SPACE COMPLEXITY - O(1)

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let maxLen = 0,
    l = 0,
    r = 0,
    n = fruits.length,
    k = 2;

  // we maintain a hash-map to store the fruits and their frequencies, this helps us keep tracking of which fruit type element to remove while shrinking the window
  let fruitMap = new Map();

  while (r < n) {
    // keep track of the fruit-type and it's frequency
    fruitMap.set(fruits[r], (fruitMap.get(fruits[r]) || 0) + 1);

    // if the size of the hash-map is in control of the in-variant (k)
    if (fruitMap.size <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }

    // if the size of the hash-map exceeds the in-variant size (k)
    if (fruitMap.size > k) {
      // decrement the frequency of the fruit-type
      fruitMap.set(fruits[l], fruitMap.get(fruits[l]) - 1);

      // when the frequency of any fruit-type becomes `0`, we remove that fruit-type from the hash-map, i.e., removing that element from the window
      if (fruitMap.get(fruits[l]) === 0) {
        fruitMap.delete(fruits[l]);
      }

      // advance `l` to continue the window shrinking flow
      l++;
    }
    r++;
  }

  return maxLen;
};

console.log(totalFruit([1, 2, 1])); // 3
console.log(totalFruit([0, 1, 2, 2])); // 3
console.log(totalFruit([1, 2, 3, 2, 2])); // 4
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])); // 5 -> [1, 2, 1, 1, 2]
