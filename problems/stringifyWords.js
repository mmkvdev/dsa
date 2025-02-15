/**
 * Write a function called stringifyNumbers which takes in an object
 * and finds all of the values which are numbers and converts them to strings.
 * Recursion would be a great way to solve this!
 * The exercise intends for you to create a new object with the numbers converted to strings,
 * and not modify the original. Keep the original object unchanged.
 */

const stringifyNumbers = (obj) => {
  let res = {};

  for (let item in obj) {
    if (typeof obj[item] === "number") {
      res[item] = obj[item].toString();
    } else if (typeof obj[item] === "object" && !Array.isArray(obj[item])) {
      res[item] = stringifyNumbers(obj[item]);
    } else {
      res[item] = obj[item];
    }
  }

  return res;
};

console.log(stringifyNumbers({ a: 2, b: 3 }));
