class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let childValue = this.values[idx];

    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let parentValue = this.values[parentIndex];
      if (parentValue >= childValue) break;
      this.values[parentIndex] = childValue;
      this.values[idx] = parentValue;
      idx = parentIndex;
    }
  }
}

const heap = new MaxBinaryHeap();
