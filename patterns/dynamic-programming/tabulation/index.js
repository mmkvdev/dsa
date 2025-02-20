// tabulation

// bottom up approach

// Time Complexity - O(n)

// Space Complexity -  O(n) [Array]

const fibonacci = (n) => {
  let dp = Array(n + 1).fill(-1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  //   console.log(dp);
  return dp[n];
};

console.log(fibonacci(5));
