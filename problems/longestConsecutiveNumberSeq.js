* https://leetcode.com/problems/longest-consecutive-sequence/


/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function longestConsecutiveNumberSeq(numbers) {
  if (numbers.length === 0) return 0;
  let numSet = new Set(numbers), maxLength = 0;

  numSet.forEach(num => {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      maxLength = Math.max(maxLength, currentStreak);
    }
  });

  return maxLength;
}
