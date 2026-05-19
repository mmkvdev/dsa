const longestSubarray = (arr, k) => {
  let sum = 0,
    maxLen = 0,
    l = 0,
    r = 0,
    n = arr.length;

  while (r < n) {
    // keep expanding i.e., update the sum
    sum += arr[r];

    // if sum equals k, update maxLen
    if (sum === k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }

    // if sum exceeds k, i.e., when a violation occurs, shrink from the `left` pointer
    if (sum > k) {
      // shrink by decrementing from the left pointer element
      sum -= arr[l];
      l++; // increment the `left` pointer
    }

    // increment the right pointer
    r++;
  }

  // return the maxLen
  return maxLen;
};

console.log(longestSubarray([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3)); // 3
