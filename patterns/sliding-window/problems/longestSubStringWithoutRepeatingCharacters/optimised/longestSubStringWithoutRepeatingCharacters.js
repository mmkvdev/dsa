/**
 * Longest substring without repeating characters
 * Time Complexity - O(n)
 * Space Complexity - O(256)
 */

const longestSubStringWithoutRepeatingCharacters = (str) => {
  if (!str) {
    return "";
  }

  let l = 0,
    r = 0,
    maxLen = 0,
    charMap = {};

  // initialise the character map upto 256 characters with -1
  for (let i = 0; i < 256; i++) {
    charMap[String.fromCharCode(i)] = -1;
  }
  while (r < str.length) {
    if (charMap[str[r]] !== -1 && l <= charMap[str[r]]) {
      l = charMap[str[r]] + 1;
      charMap[str[r]] = r;
    }

    // update character map with the string character index
    charMap[str[r]] = r;
    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }

  return maxLen;
};

console.log(longestSubStringWithoutRepeatingCharacters("cadbzabcd")); // 5
console.log(longestSubStringWithoutRepeatingCharacters("abcabcbb")); // 3
console.log(longestSubStringWithoutRepeatingCharacters("bbbbb")); // 1
console.log(longestSubStringWithoutRepeatingCharacters("pwwkew")); // 3
