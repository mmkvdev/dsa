/**
 * Sliding Window - findLongestSubstring
 * Write a function called findLongestSubstring, 
 * which accepts a string and returns the length of the longest substring with all distinct characters.

    findLongestSubstring('') // 0
    findLongestSubstring('rithmschool') // 7
    findLongestSubstring('thisisawesome') // 6
    findLongestSubstring('thecatinthehat') // 7
    findLongestSubstring('bbbbbb') // 1
    findLongestSubstring('longestsubstring') // 8
    findLongestSubstring('thisishowwedoit') // 6
*  Time Complexity - O(n)
 */

const findLongestSubstring = (str) => {
  if (!str) return 0;

  let charMap = {};

  for (let i = 0; i < 256; i++) {
    charMap[String.fromCharCode(i)] = -1;
  }

  let l = 0,
    r = 0,
    maxStrLen = 0;

  while (r < str.length) {
    if (charMap[str[r]] !== -1 && l <= charMap[str[r]]) {
      l = charMap[str[r]] + 1;
      charMap[str[r]] = r;
    }
    charMap[str[r]] = r;
    maxStrLen = Math.max(maxStrLen, r - l + 1);
    r++;
  }

  return maxStrLen;
};

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
