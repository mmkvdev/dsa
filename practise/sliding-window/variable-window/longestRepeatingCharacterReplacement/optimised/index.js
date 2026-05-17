/**
 * Given a string that has all upper case letters and an integer k. You can replace any k upper case characters from the string and task is to find out the longest substring that has all the characters as equal
 * Number of characters that need to be converted: (length of the string - maxFrequency)
 * Leetcode: https://leetcode.com/problems/longest-repeating-character-replacement/
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */
const longestRepeatingCharacterReplacement = (s, k) => {
  let maxFreq = 0,
    maxLen = 0,
    replacementsNeeded = 0,
    l = 0,
    r = 0,
    n = s.length,
    charMap = {},
    windowLength = 0;
  while (r < n) {
    charMap[s[r]] = (charMap[s[r]] || 0) + 1;
    maxFreq = Math.max(maxFreq, charMap[s[r]]);
    windowLength = r - l + 1;
    replacementsNeeded = windowLength - maxFreq;

    if (replacementsNeeded <= k) {
      maxLen = Math.max(maxLen, windowLength);
    } else {
      charMap[s[l]]--;
      l++;
    }
    r++;
  }
  return maxLen;
};

console.log(longestRepeatingCharacterReplacement("AAABBCCD", 2)); // 5
console.log(longestRepeatingCharacterReplacement("AABABBA", 2)); // 5
