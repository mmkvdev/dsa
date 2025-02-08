// merge two sorted arrays into one sorted array
const merge = (left, right) => {
  let res = [],
    leftIndex = 0,
    rightIndex = 0;

  // iterate over both the arrays, comparing elements and adding smaller one to the result array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      res.push(left[leftIndex]);
      leftIndex++;
    } else {
      res.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // recursively call left and right sub-arrays on the left and right halves
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));

console.log(mergeSort([0, 1, 9, -1]));
