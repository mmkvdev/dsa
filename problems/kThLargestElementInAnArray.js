/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 */

class MinimumPriorityQueue {
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

            if (parentElement <= childElement) break;
            this.values[parentIdx] = childElement;
            this.values[idx] = parentElement;
            idx = parentIdx;
        } 
    }

    dequeue () {
        const minElement = this.values[0];
        const endElement = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = endElement;
            this.bubbleDown();
        }

        return minElement;
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
                if (leftChild < parentElement) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild < parentElement) || (swap != null && rightChild < leftChild)) {
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
var findKthLargest = function(nums, k) {
    const heap = new MinimumPriorityQueue();

    for (let num of nums) {
        if (heap.values.length < k) {
            heap.enqueue(num);
        } else if (num > heap.values[0]) {
            heap.dequeue();
            heap.enqueue(num);
        }
    }

    return heap.values[0];
};
