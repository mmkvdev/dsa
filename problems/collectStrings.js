/**
 * Write a function called collectStrings which accepts an object
 * and returns an array of all the values in the object that have a typeof string
 */

const collectStrings = (obj) => {
  let res = [];

  for (let item in obj) {
    if (typeof obj[item] === "string") {
      res.push(obj[item]);
    } else if (typeof obj[item] === "object") {
      res.push(...collectStrings(obj[item]));
    }
  }

  return res;
};

console.log(
  collectStrings({
    a: "superman",
    b: "dc",
    c: {
      e: "mmk",
    },
  })
);
