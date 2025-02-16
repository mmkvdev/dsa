const merge = (arr1, arr2, comparatorFunc = (a, b) => a - b) => {
  let res = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (comparatorFunc(arr1[leftIndex], arr2[rightIndex]) <= 0) {
      res.push(arr1[leftIndex]);
      leftIndex++;
    } else {
      res.push(arr2[rightIndex]);
      rightIndex++;
    }
  }

  return [...res, ...arr1.slice(leftIndex), ...arr2.slice(rightIndex)];
};

var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];
console.log(merge(arr1, arr2)); // [1,2,3,4,4,5,6,8]

arr1; // [1,3,4,5];
arr2; // [2,4,6,8];

var arr3 = [-2, -1, 0, 4, 5, 6];
var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

console.log(merge(arr3, arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

var arr5 = [3, 4, 5];
var arr6 = [1, 2];

console.log(merge(arr5, arr6)); // [1,2,3,4,5]

var names = ["Bob", "Ethel", "Christine"];
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}

console.log(merge(names, otherNames, stringLengthComparator));
