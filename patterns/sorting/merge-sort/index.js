// helper function responsible for sorting two sorted arrays
const merge = (arr1, arr2) => {
  let res = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] <= arr2[rightIndex]) {
      res.push(arr1[leftIndex]);
      leftIndex++;
    } else if (arr1[leftIndex] >= arr2[rightIndex]) {
      res.push(arr2[rightIndex]);
      rightIndex++;
    }
  }

  return [...res, ...arr1.slice(leftIndex), ...arr2.slice(rightIndex)];
  //   return res.concat(arr1.slice(leftIndex)).concat(arr2.slice(rightIndex));
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(merge([1, 2, 4], [3, 5, 9]));
console.log(merge([1, 2, 11], [4, 5, 9]));
console.log(merge([1, 2, 11], [1, 5, 9]));
console.log(merge([], [1, 5, 9]));

console.log(mergeSort([9, -1, 0, 15, 3, 2]));
