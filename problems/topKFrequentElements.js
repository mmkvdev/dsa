/**
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 */

const topKFrequentElements = (arr, k) => {
  let result = [],
    freqNum = {};

  arr.forEach((item) => {
    freqNum[item] = ++freqNum[item] || 1;
  });

  let sortedFrequencyArray = Object.entries(freqNum).sort(
    (a, b) => a[1] - b[1]
  );

  while (result.length !== k) {
    let curr = sortedFrequencyArray.pop();
    result.push(Number(curr[0]));
  }

  return result;
};

console.log(topKFrequentElements([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequentElements([1], 1));
