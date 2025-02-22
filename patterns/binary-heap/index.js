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
    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let childValue = this.values[idx];
      let parentValue = this.values[parentIndex];
      if (parentValue >= childValue) break;
      if (parentValue < childValue) {
        let tmp = parentValue;
        parentValue = childValue;
        childValue = tmp;
        idx = parentIndex;
      }
    }
  }
}
