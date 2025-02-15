/**
 * Write a recursive function called nestedEvenSum.
 * Return the sum of all even numbers in an object which may contain nested objects.
 */

const nestedEvenSum = (obj) => {
  let sum = 0;
  for (let item in obj) {
    if (typeof obj[item] === "object") {
      sum = sum + nestedEvenSum(obj[item]);
    } else if (obj[item] % 2 === 0) {
      sum += obj[item];
    }
  }

  return sum;
};

console.log(nestedEvenSum({ a: 2, b: 4, c: 3, d: { e: 8 } }));

console.log(
  nestedEvenSum({
    a: 2,
    b: 4,
    c: 3,
    d: { e: 8, ccc: 90 },
    j: {
      k: {
        l: {
          p: {
            r: 14,
          },
        },
      },
    },
  })
);
