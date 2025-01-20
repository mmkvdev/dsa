const characterCount = (str) => {
  let result = {};

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }

  return result;
};

const isAlphaNumeric = (char) => {
  let charCode = char.charCodeAt(0);

  console.log({ char, charCode });
  if (
    !(charCode > 47 && charCode < 58) &&
    !(charCode > 64 && charCode < 91) &&
    !(charCode > 96 && charCode < 123)
  ) {
    return false;
  }

  return true;
};

console.log(characterCount("hello"));
console.log(characterCount("hello123"));
console.log(characterCount("hello123@#"));
