// time complexity: O(n)
// space complexity: O(1)
const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let freqMap = {};

  for (let str of str1) {
    freqMap[str] = (freqMap[str] || 0) + 1;
  }

  for (let char of str2) {
    if (!freqMap[char]) return false;
    freqMap[char]--;
  }

  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
