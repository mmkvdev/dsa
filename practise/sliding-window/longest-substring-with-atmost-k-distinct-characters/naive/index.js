//  Longest Substring with at most k distinct characters

// BRUTE FORCE APPROACH

// TIME COMPLEXITY - O(n^2)
// SPACE COMPLEXITY - O(256)
const longestSubStringWithKDistinctCharacters = (str, k) => {
  let maxLen = 0,
    charMap;

  for (let i = 0; i < str.length; i++) {
    charMap = new Map();
    for (let j = i; j < str.length; j++) {
      charMap.set(str[j], (charMap.get(str[j]) || 0) + 1);
      if (charMap.size <= k) {
        maxLen = Math.max(maxLen, j - i + 1);
      }

      if (charMap.size > k) {
        break;
      }
    }
  }

  return maxLen;
};

console.log(longestSubStringWithKDistinctCharacters("aaabbccd", 2)); // 5
