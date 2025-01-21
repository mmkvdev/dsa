/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another,
 * such as cinema, formed from iceman.
 * Time Complexity - O(n)
 * Pattern - Frequency Counter
 */

const validAnagram = (str1, str2) => {
  // if there are mismatching lengths, return false
  if (str1.length !== str2.length) {
    return false;
  }

  let freqCounterStr1 = {};
  let freqCounterStr2 = {};

  for (let val of str1) {
    freqCounterStr1[val] = ++freqCounterStr1[val] || 1;
  }

  for (let val of str2) {
    freqCounterStr2[val] = ++freqCounterStr2[val] || 1;
  }

  for (let key in freqCounterStr1) {
    if (!(key in freqCounterStr2)) {
      return false;
    }

    if (freqCounterStr1[key] !== freqCounterStr2[key]) {
      return false;
    }
  }

  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
