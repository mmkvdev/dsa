// Problem 17: Number of substrings containing all three characters
// Given a string containing only a, b and c. Write a function that takes in a string and counts the number of substrings containing all three characters (a, b and c)
// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

/**
 * @param {string} s
 * @return {number}
 * TIME COMPLEXITY: O(n)
 * SPACE COMPLEXITY: O(1)
 */
var numberOfSubstrings = function (s) {
  let count = 0,
    lastSeen = { 0: -1, 1: -1, 2: -1 },
    n = s.length,
    i = 0;

  while (i < n) {
    let seenKey = s[i].charCodeAt(0) - 97;
    lastSeen[seenKey] = i;

    if (lastSeen[0] !== -1 && lastSeen[1] !== -1 && lastSeen[2] !== -1) {
      count += 1 + Math.min(lastSeen[0], lastSeen[1], lastSeen[2]);
    }
    i++;
  }

  return count;
};

console.log(numberOfSubstrings("bbacba"));
