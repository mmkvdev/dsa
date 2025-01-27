/**
 * Longest substring with atmost `k` distinct characters
 * * Time Complexity - O(n^2)
 * Space Complexity - O(log(256))
 */

const objLen = (obj) => Object.keys(obj).length;

const longestSubstringWithAtmostKDistinctCharacters = (str, k) => {
  if (str.length < k) {
    return "";
  }

  let maxLen = 0,
    charMap;
  for (let i = 0; i < str.length; i++) {
    charMap = {};
    for (let j = i; j < str.length; j++) {
      charMap[str[j]] = (charMap[str[j]] || 0) + 1;
      if (objLen(charMap) <= k) {
        maxLen = Math.max(maxLen, j - i + 1);
      } else break;
    }
  }

  return maxLen;
};

console.log(longestSubstringWithAtmostKDistinctCharacters("aaabbccd", 2));
