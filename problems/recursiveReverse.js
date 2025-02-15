/**
 * Write a recursive function called reverse which accepts a string
 * and returns a new string in reverse.
 */

const reverse = (str) => {
  if (str.length === 0) return "";
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
};

const reverse_2 = (str) => {
  if (str.length <= 1) return str;
  return reverse_2(str.slice(1)) + str[0];
};

console.log(reverse("abc"));
console.log(reverse("calm"));
console.log(reverse_2("abc"));
console.log(reverse_2("calm"));
