/**
 * Sorting in JS
 */

// number sort
const arr = [5, 12, 10, 4];

// if a - b -> negative? a comes after b
// if a - b -> positive? b comes after a
// if a - b -> 0? a and b are equal
arr.sort((a, b) => a - b);

console.log({ arr });

// string sort
const strs = ["Data Structures & Algorithms", "MMK", "Varma"];

// sort based on string lengths
strs.sort((a, b) => a.length - b.length);

console.log({ strs });
