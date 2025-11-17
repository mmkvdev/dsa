// write a function which takes in a string and returns counts of each character in the string

const isAlphaNumeric = (char) => {
  return (char >= "a" && char <= "z") || (char >= "0" && char <= "9");
};

const charCount = (str) => {
  let result = {};

  for (let char of str) {
    let currentChar = char.toLowerCase();
    if (isAlphaNumeric(currentChar)) {
      result[currentChar] = result[currentChar] ? ++result[currentChar] : 1;
    }
  }

  return result;
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
