// using character code
const isAlphaNumeric = (str) => {
  let charCode;
  for (let i = 0; i < str.length; i++) {
    charCode = str.charCodeAt(i);

    if (
      !(charCode > 47 && charCode < 58) && // numeric (0-9)
      !(charCode > 64 && charCode < 91) && // upper alphabets (A-Z)
      !(charCode > 96 && charCode < 123) // lower alphabets (a-z)
    ) {
      return false;
    }
  }

  return true;
};

console.log(isAlphaNumeric("test"));
console.log(isAlphaNumeric("test!"));
console.log(isAlphaNumeric("test213@#"));

// using regular expression

const isAlphaNumericUsingRegex = (str) => /^[a-zA-Z0-9]+$/.test(str);

console.log(isAlphaNumericUsingRegex("test"));
console.log(isAlphaNumericUsingRegex("test!"));
console.log(isAlphaNumericUsingRegex("test213"));
