// helper method recursion
const collectAllOddValuesWithHelperApproach = (arr) => {
  let result = [];

  const helper = (helperArrInput) => {
    if (helperArrInput.length === 0) return;
    if (helperArrInput[0] % 2 !== 0) {
      result.push(helperArrInput[0]);
    }
    return helper(helperArrInput.slice(1));
  };

  helper(arr);
  return result;
};

// console.log(collectAllOddValuesWithHelperApproach([1, 2, 3, 4, 5, 6]));
// console.log(collectAllOddValuesWithHelperApproach([1, 2, 3, 4, 5, 6, 7, 8]));

// using pure recursion
const collectAllOddValues = (arr, res = []) => {
  if (arr.length === 0) {
    return res;
  }
  if (arr[0] % 2 !== 0) {
    res.push(arr[0]);
  }

  return collectAllOddValues(arr.slice(1), res);
};

console.log(collectAllOddValues([1, 2, 3, 4, 5, 6]));
console.log(collectAllOddValues([1, 2, 3, 4, 5, 6, 7, 8]));
