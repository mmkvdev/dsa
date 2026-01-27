// BETTER APPROACH
// TIME COMPLEXITY - O(n + n) => O(2n)
// SPACE COMPLEXITY - O(256)

const longestSubStringWithKDistinctCharacters = (str, k) => {
  let maxLen = 0,
    charMap = new Map(),
    l = 0,
    r = 0;

  while (r < str.length) {
    charMap.set(str[r], (charMap.get(str[r]) || 0) + 1);
    if (charMap.size <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }

    while (charMap.size > k) {
      charMap.set(str[l], (charMap.get(str[l]) || 0) - 1);
      if (charMap.get(str[l]) === 0) {
        charMap.delete(str[l]);
      }
      l++;
    }
    r++;
  }

  return maxLen;
};

console.log(longestSubStringWithKDistinctCharacters("aaabbccd", 2)); // 5
