/**
 * @param {number[]} stones
 * @return {number}
 * https://leetcode.com/problems/last-stone-weight/
 */

class MaximumPriorityQueue {
    constructor () {
        this.values = [];
    }

    enqueue (val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp () {
        let idx = this.values.length - 1;
        let childElement = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentElement = this.values[parentIdx];

            if (parentElement >= childElement) break;
            this.values[parentIdx] = childElement;
            this.values[idx] = parentElement;
            idx = parentIdx;
        }
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
                if (leftChild > parentElement) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild > parentElement) || (swap != null && rightChild > leftChild)) {
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

var lastStoneWeight = function(stones) {
    const heap = new MaximumPriorityQueue();

    // keep enqueueing all the stones to the heap
    stones.forEach(stone => heap.enqueue(stone));

    // console.log(heap, heap.values.length);
    while (heap.values.length > 1) {
        // dequeue the top two heaviest stones and combine them and re-enqueue the result to the heap
        heap.enqueue(heap.dequeue() - heap.dequeue());
    }

    // return the largest element in the heap i.e., the first element
    return heap.values[0];
};
