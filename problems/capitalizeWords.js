/**
 * Write a recursive function called capitalizeWords. Given an array of words,
 * return a new array containing each word capitalized.
 */

const capitalizeWords = (arr) => {
  if (arr.length === 0) return [];

  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
};

console.log(capitalizeWords(["mom", "Anna"]));
