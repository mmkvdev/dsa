/**
 * Write a recursive function called capitalizeFirst.
 * Given an array of strings, capitalize the first letter of each string in the array.
 */

const capitalizeFirst = (strs) => {
  if (strs.length === 0) return [];
  let firstWord = strs[0].charAt(0).toUpperCase() + strs[0].slice(1);

  return [firstWord].concat(capitalizeFirst(strs.slice(1)));
};

// ['mom', 'anna']

console.log(capitalizeFirst(["mom", "anna"]));
