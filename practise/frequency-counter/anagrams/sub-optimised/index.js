// 	Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or a name formed by rearranging the letters of another, such as cinema, formed from iceman
// Input: only lowercase strings, with no special characters or no capital letters
// Output: boolean (true or false)
// Time Complexity: O(n+k), where n is the length of the string, since we don't process unequal strings and `k` is the count of distinct characters of the string2, that are stored as keys, since we're iterating over string2 in the final loop

// Space Complexity: O(n), since we're declaring two objects each for string1 and string2 and the memory requirements for both of these objects might grow and more keys will be stored as in when the input size grows

const generateFrequencyMap = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  return obj;
};

const validAnagram = (str1, str2) => {
  // if strings lengths don't match, then return preemptive `false`
  if (str1.length !== str2.length) return false;

  // object to store the characters and their frequencies in string1
  let obj1 = generateFrequencyMap(str1);
  // object to store the characters and their frequencies in string2
  let obj2 = generateFrequencyMap(str2);

  // iterate over the object container of string2
  for (let key in obj2) {
    // check if any character in the string2_object_container is not available in string1_object_container
    // if yes, then return false
    if (!(key in obj1)) {
      return false;
    } else {
      // if no
      // then check for the frequency of that character
      // if unequal, return false
      if (obj2[key] !== obj1[key]) return false;
    }
  }

  // return true for predictable cases
  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
