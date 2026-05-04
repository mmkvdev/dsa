// Time Complexity - O(n)
// Space Complexity - O(n)
const moveZeroes = (arr) => {
  if (arr.length === 1) return arr;

  let res = new Array(arr.length).fill(0);
  let index = 0;

  for (let val of arr) {
    if (val !== 0) {
      res[index] = val;
      index++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = res[i];
  }

  console.log({ arr });
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([1]));
