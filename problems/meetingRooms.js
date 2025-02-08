const meetingRooms = (intervals) => {
  if (!intervals.length) return 0;

  // sort by start time
  intervals.sort((a, b) => a[0] - b[0]);

  // min heap to track the earliest ending meeting
  let minHeap = [];

  intervals.forEach(([start, end]) => {
    if (minHeap.length && minHeap[0] <= start) {
      minHeap.shift();
    }

    minHeap.push(end);
    minHeap.sort((a, b) => a - b);
  });

  return minHeap.length;
};

const meetingRooms2 = (intervals) => {
  if (!intervals.length) return 0;

  let starts = intervals.map((item) => item[0]).sort((a, b) => a - b);
  let ends = intervals.map((item) => item[1]).sort((a, b) => a - b);

  let rooms = 0,
    endPtr = 0;

  starts.forEach((start) => {
    if (start >= ends[endPtr]) {
      endPtr++;
    } else {
      rooms++;
    }
  });

  return rooms;
};

console.log(
  meetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);

console.log(
  meetingRooms2([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
