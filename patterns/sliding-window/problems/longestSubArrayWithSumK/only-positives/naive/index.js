const longestSubarray = (arr, k) => {
  let maxLen = 0,
    sum,
    n = arr.length;

  for (let i = 0; i < n; i++) {
    sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum === k) {
        maxLen = Math.max(maxLen, j - i + 1);
      }

      if (sum > k) break;
    }
  }
  return maxLen;
};

console.log(longestSubarray([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3)); // 3
