/**
 * Write a function called sameFrequency. 
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities:
 * Time: O(N)

 * Sample Input:
    * sameFrequency(182,281) // true
    * sameFrequency(34,14) // false
    * sameFrequency(3589578, 5879385) // true
    * sameFrequency(22,222) // false
 */

const constructFreqObj = (n) => {
  let res = {};

  while (n) {
    let rem = n % 10;
    res[rem] = ++res[rem] || 1;
    n = parseInt(n / 10);
  }

  return res;
};

const sameFrequency = (a, b) => {
  let freqA = constructFreqObj(a);
  let freqB = constructFreqObj(b);

  if (Object.keys(freqA).length !== Object.keys(freqB).length) {
    return false;
  }

  for (let i in freqA) {
    if (!(i in freqB) || freqA[i] !== freqB[i]) {
      return false;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 3589578)); // true
console.log(sameFrequency(22, 222)); // false
