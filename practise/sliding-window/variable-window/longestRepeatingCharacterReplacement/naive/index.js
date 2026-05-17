// Given a string that has all upper case letters and an integer k. You can replace any k upper case characters from the string and task is to find out the longest substring that has all the characters as equal
// Number of characters that need to be converted: (length of the string - maxFrequency)
// BRUTE FORCE APPROACH
/*
 * TIME COMPLEXITY - O(N^2)
 * SPACE COMPLEXITY - O(1)
 */
const longestRepeatingCharacterReplacement = (s, k) => {
  let maxFreq = 0,
    changes = 0,
    charMap,
    n = s.length,
    maxLen = 0;

  for (let i = 0; i < n; i++) {
    charMap = new Map();
    for (let j = i; j < n; j++) {
      charMap.set(s[j], (charMap.get(s[j]) || 0) + 1);
      maxFreq = Math.max(maxFreq, charMap.get(s[j]));
      changes = j - i + 1 - maxFreq;
      if (changes <= k) {
        maxLen = Math.max(maxLen, j - i + 1);
      } else {
        break;
      }
    }
  }
  return maxLen;
};

console.log(longestRepeatingCharacterReplacement("AABABBA", 2)); // 5
