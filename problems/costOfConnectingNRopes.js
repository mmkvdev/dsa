* https://www.geeksforgeeks.org/connect-n-ropes-minimum-cost/


//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(" ").map(Number);
        const solution = new Solution();
        const result = solution.minCost(arr);
        console.log(result);
    }
}

// } Driver Code Ends


class MinimumPriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
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

    dequeue() {
        const minElement = this.values[0];
        const endElement = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = endElement;
            this.bubbleDown();
        }
        return minElement;
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

// User function Template for javascript
class Solution {
    // Function to return the minimum cost of connecting the ropes.
    minCost(arr) {
        // code here
        let heap = new MinimumPriorityQueue();
        for(let item of arr) heap.enqueue(item);
        let res = 0;
        while (heap.values.length > 1) {
            let first = heap.dequeue();
            let second = heap.dequeue();
            res += first + second;
            heap.enqueue(first + second);
        }
        
        return res;
    }
}
