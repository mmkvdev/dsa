/**
 * Write a function called productOfArray which takes in an array of numbers
 * and returns the product of them all.
 */

const productOfArray = (arr) => {
  //   return arr.reduce((acc, val) => acc * val, 1);
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([1, 2, 3, 4])); // 24
console.log(productOfArray([2, 1, 3, 4])); // 24
console.log(productOfArray([4, 5, 2, 1])); // 40
console.log(productOfArray([4, 5, 2, 1, 0, 12, 14, 15])); // 0
console.log(productOfArray([4, 5, 2, 1, 12, 14, 15])); // 690
