// Dynamic Programming

// Overlapping sub-problems

// Optimal substructure

// Time Complexity - O(n)

// Space Complexity - O(n) [stack space] + O(n) [Array]

const fibonacci = (n) => {
  let dp = Array(n + 1).fill(-1);
  dp[0] = 0;
  dp[1] = 1;

  const helper = (n) => {
    if (n <= 1) return n;
    console.log({ n, check: dp, dp: dp[n] });
    if (dp[n] !== -1) {
      console.log("cache hit: ", dp[n]);
      return dp[n];
    }

    console.log("cache hit: ", dp[n]);
    dp[n] = helper(n - 1) + helper(n - 2);
    return dp[n];
  };

  helper(n);

  return dp[n];
};

console.log(fibonacci(5));
console.log(fibonacci(0));

// 0 1 1 2 3 5 8 13 21 34 55
