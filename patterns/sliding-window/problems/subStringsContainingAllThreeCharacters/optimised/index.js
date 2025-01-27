/**
 * Given a string(s) consisting of only characters a, b and c.
 * return the number of substrings containing atleast one occurrence of all these characters a, b and c.
 * Time Complexity - O(N^2)
 * Space Complexity - O(1)
 */

const subStringsContainingAllThreeCharacters = (str) => {
  let count = 0,
    charMap = {
      a: 0,
      b: 0,
      c: 0,
    },
    l = 0,
    r = 0;

  while (r < str.length) {
    charMap[str[r]]++;
    while (charMap["a"] > 0 && charMap["b"] > 0 && charMap["c"] > 0) {
      count += str.length - r;
      charMap[str[l]]--;
      l++;
    }
    r++;
  }

  return count;
};

console.log(subStringsContainingAllThreeCharacters("abcabc")); // 10
