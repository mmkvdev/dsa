/**
 * loop over the longer string
 * loop over the shorter string
 * if the characters don't match, break out of the inner loop
 * if the characters do match, continue
 * if you complete the inner loop and find a match, increment the count of matches
 * return the count
 */

const naiveSearch = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }

  return count;
};

console.log(naiveSearch("harold said haha", "haha"));
console.log(naiveSearch("mmk varma", "madhu"));
console.log(naiveSearch("harold said haha", "ha"));
