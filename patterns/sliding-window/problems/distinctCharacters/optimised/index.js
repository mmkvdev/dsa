/**
 * Longest substring with atmost `k` distinct characters
 * * Time Complexity - O(n) + O(n)
 * * Space Complexity - O(256)
 */

const objLen = (obj) => Object.keys(obj).length;

const longestSubstringWithAtmostKDistinctCharacters = (str, k) => {
  if (str.length < k) {
    return "";
  }

  let maxLen = 0,
    l = 0,
    r = 0,
    charMap = {};
  while (r < str.length) {
    charMap[str[r]] = (charMap[str[r]] || 0) + 1;

    if (Object.keys(charMap).length > k) {
      charMap[str[l]] -= 1;
      if (charMap[str[l]] === 0) {
        delete charMap[str[l]];
      }
      l++;
    }
    if (Object.keys(charMap).length <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }
    r++;
  }

  return maxLen;
};

console.log(longestSubstringWithAtmostKDistinctCharacters("aaabbccd", 2));
console.log(
  longestSubstringWithAtmostKDistinctCharacters("aaabbccdeeeeaaaavvvvaaaccc", 2)
);
