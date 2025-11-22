// write a function which takes in a string and returns counts of each character in the string

// approach 1
const isAlphaNumeric = (char) => {
  return (char >= "a" && char <= "z") || (char >= "0" && char <= "9");
};

// solution 1
/**
 * TIME COMPLEXITY: O(n) => where `n` is the length of the string, since we're processing each character of the string once
 * SPACE COMPLEXITY:
 * worst case: O(k) => where `k` is the space consumed by `result` obj for processing `k` distinct alpha numeric characters in the string,
 * but it can also be O(n), in case of strings like `abcd` where we have to process all the distinct characters in the string
 * best case: O(1), in case of strings like `aaaa`
 */
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

// logs for solution 1
console.log("Solution 1 logs: ");
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

// -----------------[SOLUTION: 2]--------------------------- //

// approach 2
const isAlphaNumericUsingRegex = (char) => {
  return /[a-z0-9]/.test(char);
};

// solution 2
/**
 * TIME COMPLEXITY: O(n) => where `n` is the length of the string, since we're processing each character of the string once
 * SPACE COMPLEXITY:
 * worst case: O(k) => where `k` is the space consumed by `result` obj for processing `k` distinct alpha numeric characters in the string,
 * but it can also be O(n), in case of strings like `abcd` where we have to process all the distinct characters in the string
 * best case: O(1), in case of strings like `aaaa`
 */
const charCountUsingRegex = (str) => {
  let result = {};

  for (let char of str) {
    let currentChar = char.toLowerCase();
    if (isAlphaNumericUsingRegex(currentChar)) {
      result[currentChar] = result[currentChar] ? ++result[currentChar] : 1;
    }
  }

  return result;
};

// logs for solution 2
console.log("Solution 2 logs: ");
console.log(charCountUsingRegex("aaaa"));
/**
 * { a: 4 }
 */

console.log(charCountUsingRegex("hello"));
/**
 * { h: 1, e: 1, l: 2, o: 1 }
 */

console.log(charCountUsingRegex("Your PIN number is 1234!"));
/**
 * { 1: 1, 2: 1, 3: 1, 4: 1, b: 1, e: 1, i: 2, m: 1, n: 2, o: 1, p: 1, r: 2, s: 1, u: 2, y: 1 }
 */

// -----------------[SOLUTION: 3]--------------------------- //

// approach 3
const isAlphaNumericUsingCharCode = (char) => {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }

  return true;
};

// solution 3
/**
 * TIME COMPLEXITY: O(n) => where `n` is the length of the string, since we're processing each character of the string once
 * SPACE COMPLEXITY:
 * worst case: O(k) => where `k` is the space consumed by `result` obj for processing `k` distinct alpha numeric characters in the string,
 * but it can also be O(n), in case of strings like `abcd` where we have to process all the distinct characters in the string
 * best case: O(1), in case of strings like `aaaa`
 */
const charCountUsingCharCode = (str) => {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumericUsingCharCode(char)) {
      let currentChar = char.toLowerCase();
      obj[currentChar] = ++obj[currentChar] || 1;
    }
  }

  return obj;
};

// logs for solution 3
console.log("Solution 3 logs: ");
console.log(charCountUsingCharCode("aaaa"));
/**
 * { a: 4 }
 */

console.log(charCountUsingCharCode("hello"));
/**
 * { h: 1, e: 1, l: 2, o: 1 }
 */

console.log(charCountUsingCharCode("Your PIN number is 1234!"));
/**
 * { 1: 1, 2: 1, 3: 1, 4: 1, b: 1, e: 1, i: 2, m: 1, n: 2, o: 1, p: 1, r: 2, s: 1, u: 2, y: 1 }
 */

// -----------------[SOLUTION: 4]--------------------------- //
const isAlphaNumericOptimised = (char) => {
  const charCode = char.charCodeAt(0);
  if (
    !(charCode >= 48 && charCode <= 57) && // numeric [0-9]
    !(charCode >= 65 && charCode <= 90) && // upper alpha [A-Z]
    !(charCode >= 97 && charCode <= 122) // lower alpha [a-z]
  ) {
    return false;
  }

  return true;
};

const charCountOptimised = (str) => {
  // return empty obj if the input string is not a string
  if (!str) return {};
  const result = {};

  for (let i = 0; i < str.length; i++) {
    if (!isAlphaNumericOptimised(str[i])) continue;
    const currentChar = str[i].toLowerCase();
    result[currentChar] = (result[currentChar] || 0) + 1;
  }

  return result;
};

// logs for solution 4
console.log("Solution 4 logs: ");
console.log(charCountOptimised("aaaa"));
/**
 * { a: 4 }
 */

console.log(charCountOptimised("hello"));
/**
 * { h: 1, e: 1, l: 2, o: 1 }
 */

console.log(charCountOptimised("Your PIN number is 1234!"));
/**
 * { 1: 1, 2: 1, 3: 1, 4: 1, b: 1, e: 1, i: 2, m: 1, n: 2, o: 1, p: 1, r: 2, s: 1, u: 2, y: 1 }
 */
