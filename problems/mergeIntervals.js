const mergeIntervals = (intervals) => {
  let res = [];
  if (intervals.length === 0) return res;

  intervals.sort((a, b) => a[0] - b[0]);
  console.log({ intervals });
  let tmpInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [tmpStart, tmpEnd] = tmpInterval;
    const [startInterval, endInterval] = intervals[i];

    const low = Math.min(tmpStart, startInterval);
    const high = Math.max(tmpEnd, endInterval);

    if (tmpEnd >= startInterval) {
      tmpInterval = [low, high];
    } else {
      res.push(tmpInterval);
      tmpInterval = intervals[i];
    }
  }

  res.push(tmpInterval);

  return res;
};

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ])
);

console.log(
  mergeIntervals([
    [1, 9],
    [2, 5],
    [19, 20],
    [10, 11],
    [12, 20],
    [0, 3],
    [0, 1],
    [10, 2],
  ])
);
