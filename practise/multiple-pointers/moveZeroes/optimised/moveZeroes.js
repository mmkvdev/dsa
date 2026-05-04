// Time Complexity - O(n)
// Space Complexity - O(1)
const moveZeroes = (arr) => {
  if (arr.length === 1) return arr;

  let left = 0,
    right = 0,
    n = arr.length;

  while (right < n) {
    if (arr[right] !== 0) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
    }

    right++;
  }

  return arr;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([1]));
