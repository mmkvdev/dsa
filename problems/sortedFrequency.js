// Given a sorted array and a number,
// write a function called sortedFrequency that counts the occurrences of the number in the array

const sortedFrequency = (arr, num) => {
  const findFirstIndex = () => {
    let left = 0,
      right = arr.length - 1,
      first = -1,
      mid = 0;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);

      if (arr[mid] === num) {
        first = mid;
        right = mid - 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return first;
  };

  const findLastIndex = () => {
    let left = 0,
      right = arr.length - 1,
      last = -1,
      mid = 0;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);

      if (arr[mid] === num) {
        last = mid;
        left = mid + 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return last;
  };

  if (findFirstIndex() === -1) return findFirstIndex();
  return findLastIndex() - findFirstIndex() + 1;
};

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4));
