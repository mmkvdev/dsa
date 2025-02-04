/**
 * 
 * Multiple Pointers - isSubsequence
 * Write a function called isSubsequence which takes in two strings and 
 * checks whether the characters in the first string form a subsequence of the characters in the second string. 
 * In other words, the function should check whether the characters in the first string appear 
 * somewhere in the second string, without their order changing.

 * Examples:
    * isSubsequence('hello', 'hello world'); // true
    * isSubsequence('sing', 'sting'); // true
    * isSubsequence('abc', 'abracadabra'); // true
    * isSubsequence('abc', 'acb'); // false (order matters)

* Your solution MUST have AT LEAST the following complexities:

* Time Complexity - O(N + M)

* Space Complexity - O(1)
 */

const isSubsequence = (str1, str2) => {
  if (!str1 || !str2) return false;

  let l = 0,
    r = 0;

  while (l < str1.length && r < str2.length) {
    if (str1[l] === str2[r]) l++;
    r++;
  }

  return l === str1.length;
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
