/**
 * Longest Repeating Character Replacement
 * Given a string containing capital letters and `k`, which signifies that we can pick `k` characters from the given string
 * and convert them to any possible upper case letter, figure out the longest substring which is equal.
 */

const longestRepeatingCharacterReplacement = (str, k) => {
  let l = 0,
    r = 0,
    maxLen = 0,
    maxFreq = 0,
    charMap = {};

  // initialize a hashmap with capital letters
  for (let i = 65; i <= 90; i++) {
    charMap[String.fromCharCode(i)] = 0;
  }

  while (r < str.length) {
    charMap[str[r]]++;
    maxFreq = Math.max(maxFreq, charMap[str[r]]);

    while (r - l + 1 - maxFreq > k) {
      charMap[str[l]]--;
      l++;
    }

    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }

  return maxLen;
};

console.log(longestRepeatingCharacterReplacement("AAABBCCD", 2));
