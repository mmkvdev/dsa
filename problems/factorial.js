/**
 *
 * @param {number} num
 * factorial of a number
 */
// iterative approach
const factorialIterative = (num) => {
  let track = 1;

  while (num > 0) {
    track *= num;
    num--;
  }

  return track;
};

console.log("iterative approach");
console.log(factorialIterative(5));
console.log(factorialIterative(4));
console.log(factorialIterative(2));
console.log(factorialIterative(3));
console.log(factorialIterative(1));
console.log(factorialIterative(0));

// recursive approach
const factorialRecursive = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorialRecursive(num - 1);
};

console.log("recursive approach");
console.log(factorialRecursive(5));
console.log(factorialRecursive(4));
console.log(factorialRecursive(2));
console.log(factorialRecursive(3));
console.log(factorialRecursive(1));
console.log(factorialRecursive(0));
