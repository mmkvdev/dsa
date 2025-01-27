/**
 * Fruits into Baskets
 * Max Length Sub Array with atmost `2` distinct types of numbers
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */

const objLen = (obj) => Object.keys(obj).length;

const fruitsIntoBaskets = (arr) => {
  const fruits = {};

  let l = 0,
    r = 0,
    maxLen = 0;

  while (r < arr.length) {
    fruits[arr[r]] = (fruits[arr[r]] || 0) + 1;

    if (objLen(fruits) > 2) {
      fruits[arr[l]] -= 1;
      if (fruits[arr[l]] === 0) {
        delete fruits[arr[l]];
      }
      l++;
    }

    if (objLen(fruits) <= 2) {
      maxLen = Math.max(maxLen, r - l + 1);
    }

    r++;
  }

  return maxLen;
};

console.log(fruitsIntoBaskets([2, 1, 2])); // 3
console.log(fruitsIntoBaskets([3, 1, 2, 2, 2, 2])); // 5
