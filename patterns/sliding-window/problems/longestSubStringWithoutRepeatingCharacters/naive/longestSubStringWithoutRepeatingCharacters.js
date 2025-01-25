/**
 * Longest substring without repeating characters
 * Time Complexity - O(N^2)
 * Space Complexity - O(256)
 */

const initializeHashMap = (hashMap) => {
  // initialize hashmap with 256 characters;
  for (let i = 0; i < 255; i++) {
    hashMap[String.fromCharCode(i)] = 0;
  }

  return hashMap;
};

const longestSubStringWithoutRepeatingCharacters = (str) => {
  if (!str) {
    return "";
  }

  let substr = "",
    hashMap = {},
    maxLen = 0;

  // generate all possible substrings without repeating characters;
  for (let i = 0; i < str.length; i++) {
    substr = "";
    hashMap = initializeHashMap({});
    for (let j = i; j < str.length; j++) {
      if (hashMap[str[j]] === 1) break;
      maxLen = Math.max(maxLen, j - i + 1);
      hashMap[str[j]] = 1;
    }
  }
  return maxLen;
};

console.log(longestSubStringWithoutRepeatingCharacters("cadbzabcd")); // 5
