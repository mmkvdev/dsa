// given two strings arr1 and arr2, determine whether they are anagrams or not

/**
 * Time Complexity
    * `n` operations to iterate while building obj1
    * `n` operations to iterate while building obj2 (since string lengths are the same)
    * `n` operations to iterate over obj1 to check for keys and their frequencies in obj2
    * So, O(n + n + n) => O(3n) => O(n)
    
 * Space Complexity - here we're using two objects
    *  Space Complexity here would be O(1), because no matter how big the string length can go, we only have 26 characters in English
 */
const isAnagram = (str1, str2) => {
  // if the length of the strings are varying, return preemptive false
  if (str1.length !== str2.length) return false;

  let obj1 = {},
    obj2 = {};

  // count the frequencies of str1
  for (let char of str1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }

  // count the frequencies of str2
  for (let char of str2) {
    obj2[char] = (obj2[char] || 0) + 1;
  }

  // iterate over frequency counter of str1 - obj1
  // for each frequency entry, check whether obj2 has the similar
  // if yes, then check for it's frequency
  // if the frequency matches, it's an anagram
  // false otherwise
  for (let freq in obj1) {
    if (!(freq in obj2)) {
      return false;
    }

    // frequency check
    if (obj1[freq] !== obj2[freq]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("rat", "art")); // true
console.log(isAnagram("rat", "ar")); // false
console.log(isAnagram("", "")); // true
console.log(isAnagram("aaz", "zza")); // false
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("awesome", "awesom")); // false
console.log(isAnagram("texttwisttime", "timetwisttext")); // true
