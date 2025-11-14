// write a function to calculate the sum of all numbers starting from 1 upto (and including) some number `n`

function addUpToNaive(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(addUpToNaive(6));
console.log(addUpToNaive(16));
console.log(addUpToNaive(160));

// optimised approach using core math equation of calculating sum of first `n` natural numbers
function addUpToOptimised(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpToOptimised(6));
console.log(addUpToOptimised(16));
console.log(addUpToOptimised(160));
