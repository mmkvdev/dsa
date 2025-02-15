/**
 * Write a function that accepts an array and a value
 * loop through the array and check if the current array element is equal to the value
 * If it is, return the index at which the elemnet is found
 * If the value is never found, return -1
 */

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
};

console.log(linearSearch([1, 2, 5, 6], 5));
