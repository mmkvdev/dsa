/**
 * Longest Repeating Character Replacement
 * Given a string containing capital letters and `k`, which signifies that we can pick `k` characters from the given string
 * and convert them to any possible upper case letter, figure out the longest substring which is equal.
 */

const longestRepeatingCharacterReplacement = (str, k) => {
  let maxFreq = 0,
    hashMap,
    changes = 0,
    maxLen = 0,
    n = str.length;
  // generate all possible substrings from the given string
  for (let i = 0; i < n; i++) {
    hashMap = new Map();
    for (let j = i; j < n; j++) {
      hashMap.set(str[j], (hashMap.get(str[j]) || 0) + 1);
      maxFreq = Math.max(maxFreq, hashMap.get(str[j]));
      changes = j - i + 1 - maxFreq;
      if (changes <= k) {
        maxLen = Math.max(maxLen, j - i + 1);
      } else {
        break;
      }
      console.log({ hashMap });
    }
  }
  return maxLen;
};

console.log(longestRepeatingCharacterReplacement("AABABBA", 2)); // 5
