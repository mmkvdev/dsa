/**
 * Fruits into Baskets
 * Max Length Sub Array with atmost `2` distinct types of numbers
 * Time Complexity - O(N^2)
 * Space Complexity - O(3)
 */

const fruitsIntoBaskets = (arr) => {
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    const fruits = new Set();
    for (let j = i; j < arr.length; j++) {
      fruits.add(arr[j]);
      if (fruits.size <= 2) {
        maxLen = Math.max(maxLen, j - i + 1);
      } else break;
    }
  }

  return maxLen;
};

console.log(fruitsIntoBaskets([2, 1, 2])); // 3
console.log(fruitsIntoBaskets([3, 1, 2, 2, 2, 2])); // 5
