/**
 * https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-find-missing-number-in-sequence
 */

/**
 * @param {number[]} numbers
 * @return {number}
 */
function findMissingNumberInSequence(numbers) {
  let actualSum = 0,
    currentSum = 0;
  Array.from({ length: numbers.length + 1 }, (_, i) => (actualSum += i));

  numbers.forEach((number) => (currentSum += number));

  return actualSum - currentSum;
}
