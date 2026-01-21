/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0,
    r = 0,
    maxLen = 0,
    charMap = {};

  while (r < s.length) {
    // idea here is to make sure we capture a duplicate character and see where it's in the current window
    // if `yes`, then jump one position ahead of it
    if (charMap[s[r]] !== undefined && l <= charMap[s[r]]) {
      l = charMap[s[r]] + 1;
    }

    charMap[s[r]] = r;
    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("cadbzabcd")); // 5
