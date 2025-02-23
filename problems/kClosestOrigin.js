/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 * https://leetcode.com/problems/k-closest-points-to-origin/
 */
class MaximumPriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(point, distance) {
        this.values.push({ point, distance });
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let childElement = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentElement = this.values[parentIdx];

            if (parentElement.distance >= childElement.distance) break;
            this.values[parentIdx] = childElement;
            this.values[idx] = parentElement;
            idx = parentIdx;
        }
    }

    dequeue() {
        const maxElement = this.values[0];
        const endElement = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = endElement;
            this.bubbleDown();
        }
        return maxElement;
    }

    bubbleDown() {
        let idx = 0;
        let parentElement = this.values[idx];
        let length = this.values.length;

        while (true) {
            let leftChildIndex = 2 * idx + 1;
            let rightChildIndex = 2 * idx + 2;
            let leftChild, rightChild, swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.distance > parentElement.distance) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild.distance > parentElement.distance) || (swap != null && rightChild.distance > leftChild.distance)) {
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

var kClosest = function (points, k) {
    const heap = new MaximumPriorityQueue();

    for (let [x, y] of points) {
        let distance = x * x + y * y;

        if (heap.values.length < k) {
            heap.enqueue([x, y], distance);
        } else if (distance < heap.values[0].distance) {
            heap.dequeue();
            heap.enqueue([x, y], distance);
        }
    }

    return heap.values.map(entry => entry.point);
};
