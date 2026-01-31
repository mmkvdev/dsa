// Problem 17: Number of substrings containing all three characters
// Given a string containing only a, b and c. Write a function that takes in a string and counts the number of substrings containing all three characters (a, b and c)

// BRUTE FORCE APPROACH

// TIME COMPLEXITY - O(n^2)
// SPACE COMPLEXITY - O(1)
const numberOfSubstrings = (s) => {
  let count = 0,
    n = s.length,
    charMap;
  for (let i = 0; i < n; i++) {
    charMap = {};
    for (let j = i; j < n; j++) {
      const charKey = s[j].charCodeAt(0) - 97;
      charMap[charKey] = 1;
      if (charMap[0] + charMap[1] + charMap[2] === 3) {
        count += n - j;
        break;
      }
    }
  }

  return count;
};

console.log(numberOfSubstrings("bbacba")); // 9
