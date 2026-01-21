/**
 * Longest Substring without repeating characters
 * Given a string (any character, lowercase, uppercase, special character), 
 * the goal is to find the longest substring without repeating (unique) characters 
 * and return its length

 */
const longestSubStringWithoutRepeatingCharacters = (s) => {
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    let map = {};
    for (let j = i; j < s.length; j++) {
      if (map[s[j]] === 1) break;
      map[s[j]] = 1;
      console.log({ map });
      maxLen = Math.max(maxLen, j - i + 1);
    }
  }
  return maxLen;
};

console.log(longestSubStringWithoutRepeatingCharacters("cadbzabcd"));
