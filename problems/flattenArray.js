/**
 * Write a recursive function called flatten which accepts an array of arrays
 * and returns a new array with all values flattened.
 */

const flattenArray = (arr) => {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res.push(...flattenArray(item));
    } else {
      res.push(item);
    }
  }

  return res;
};

console.log(flattenArray([1, 2, 3, [4, 5]]));
console.log(flattenArray([1, 2, 3, [4, 5, [4, 6, 78], [[[4, 55, 7]]]]]));
