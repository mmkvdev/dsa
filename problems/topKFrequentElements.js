/**
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 */

const topKFrequentElements = (arr, k) => {
  let result = [],
    freqNum = {};

  arr.forEach((item) => {
    freqNum[item] = ++freqNum[item] || 1;
  });

  let sortedFrequencyArray = Object.entries(freqNum).sort(
    (a, b) => a[1] - b[1]
  );

  while (result.length !== k) {
    let curr = sortedFrequencyArray.pop();
    result.push(Number(curr[0]));
  }

  return result;
};

console.log(topKFrequentElements([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequentElements([1], 1));


// cleaner solution

var topKFrequent = function(nums, k) {
    let map = {}, res = [];

    for (let num of nums) map[num] = (map[num] || 0) + 1;

    const sortedFrequencyOfNums = Object.entries(map).sort((a, b) => a[1] - b[1]);

    while (res.length !== k) {
        let cur = sortedFrequencyOfNums.pop();
        res.push(Number(cur[0]));
    }

    return res;
};



// using priority queues
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MaximumPriorityQueue {
    constructor () {
        this.values = [];
    }

    enqueue (val, priority) {
        this.values.push({ val, priority });
        this.bubbleUp();
    }

    dequeue () {
        const maxElement = this.values[0];
        const endElement = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = endElement;
            this.bubbleDown();
        }

        return maxElement;
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let childElement = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentElement = this.values[parentIdx];

            if (parentElement.priority >= childElement.priority) break;
            this.values[parentIdx] = childElement;
            this.values[idx] = parentElement;
            idx = parentIdx;
        }
    }

    bubbleDown () {
        let idx = 0;
        let parentElement = this.values[idx];
        let length = this.values.length;

        while (true) {
            let leftChildIndex = 2 * idx + 1;
            let rightChildIndex = 2 * idx + 2;
            let leftChild, rightChild, swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority > parentElement.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild.priority > parentElement.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = parentElement;
            idx = swap;
        }
    }
}

var topKFrequent = function(nums, k) {
    const heap = new MaximumPriorityQueue();
    const map = {}, res = [];
    nums.forEach(num => map[num] = (map[num] || 0) + 1);

    for (let freqKey in map) {
        heap.enqueue(freqKey, map[freqKey]);
    }

    // keep dequeueing till `k` times
    for (let i = 0; i < k; i++) {
        res.push(heap.dequeue());
    }

    return res.map((item) => Number(item.val));
};
