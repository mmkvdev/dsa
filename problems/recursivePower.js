/**
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
 */

// 2 ^ 3 => 2 * 2 * 2 => 8
const recursivePower = (base, exponent) => {
  if (exponent === 1) return base;
  return base * recursivePower(base, exponent - 1);
};

console.log(recursivePower(2, 3));
console.log(recursivePower(4, 4));
console.log(recursivePower(2, 2));
