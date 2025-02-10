/**
 * Balanced Brackets
 * Problem Statement: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-balanced-brackets
 */

/**
 * @param {string} str
 * @return {boolean}
 */
export default function isBalancedBrackets(str) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "{" || str[i] === "[" || str[i] === "(") {
      res.push(str[i]);
    } else if (str[i] === "}") {
      if (res[res.length - 1] === "{") {
        res.pop();
      } else {
        return false;
      }
    } else if (str[i] === "]") {
      if (res[res.length - 1] === "[") {
        res.pop();
      } else {
        return false;
      }
    } else if (str[i] === ")") {
      if (res[res.length - 1] === "(") {
        res.pop();
      } else {
        return false;
      }
    }
  }

  return res.length === 0;
}
