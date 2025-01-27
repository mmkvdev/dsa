/**
 * Given a string(s) consisting of only characters a, b and c.
 * return the number of substrings containing atleast one occurrence of all these characters a, b and c.
 * Time Complexity - O(N^2)
 * Space Complexity - O(1)
 */

const isOccurrenceAtLeastOnce = (obj) => {
  return Object.values(obj).every((val) => val >= 1);
};

const subStringsContainingAllThreeCharacters = (str) => {
  let charMap,
    k = 0;
  for (let i = 0; i < str.length; i++) {
    charMap = {
      a: 0,
      b: 0,
      c: 0,
    };
    for (let j = i; j < str.length; j++) {
      if (charMap.hasOwnProperty(str[j])) {
        charMap[str[j]] = (++charMap[str[j]] || 0) + 1;
      }

      if (!charMap.hasOwnProperty(str[j])) {
        break;
      }

      if (isOccurrenceAtLeastOnce(charMap)) {
        k++;
      }
    }
  }

  return k;
};

console.log(subStringsContainingAllThreeCharacters("abcabc")); // 10
