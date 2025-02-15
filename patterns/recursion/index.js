// recursive approach
const countDown = (n) => {
  if (n <= 0) {
    console.log("All Done!");
    return;
  }
  console.log(n);
  n--;
  countDown(n);
};

countDown(10);
// countDown(100);

// iterative approach
const countDownIterative = (n) => {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("All Done!");
};

countDownIterative(10);
