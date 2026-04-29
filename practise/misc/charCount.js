// write a function which takes in a string and returns counts of each character in the string
// string will never be empty
// focus on alpha numeric characters and lower case only
// i.e., capital letters are also considered the same casing as that of lower case,
// that means focus is on case-insensitive
// input will be a string
// output will be an object containing the character followed by its count

// function to check whether a character is alpha-numeric or not
const isAlphaNumeric = (char) => {
  // get char code
  const code = char.charCodeAt(0);

  // return `false` if the char code doesn't fall in the limits
  // numbers (48 - 57)
  // upper case (65 - 90)
  // lower case (97 - 122)
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }

  return true;
};

const charCount = (str) => {
  let res = {};

  // iterate over the string and keep it track of alpha numeric character occurrence
  for (let char of str) {
    // check if the current character is alpha-numeric
    if (isAlphaNumeric(char)) {
      let currentChar = char.toLowerCase();
      res[currentChar] = (res[currentChar] || 0) + 1;
    }
  }

  return res;
};

console.log(charCount("aaaa"));
/**
 * { a: 4 }
 */

console.log(charCount("hello"));
/**
 * { h: 1, e: 1, l: 2, o: 1 }
 */

console.log(charCount("Your PIN number is 1234!"));
/**
 * { 1: 1, 2: 1, 3: 1, 4: 1, b: 1, e: 1, i: 2, m: 1, n: 2, o: 1, p: 1, r: 2, s: 1, u: 2, y: 1 }
 */
