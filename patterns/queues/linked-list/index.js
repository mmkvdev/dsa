// Queues using linkedlist

/**
 * here we insert from the last (enqueue) and remove from the front (dequeue)
 * FIFO (First In First Out)
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // insert from the last
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this.size;
  }

  // remove from the front
  dequeue() {
    if (!this.first) {
      return null;
    } else {
      let tmp = this.first;
      this.first = this.first.next;

      this.size--;
      if (this.size === 0) {
        this.last = null;
      }

      return tmp.value;
    }
  }

  print() {
    let current = this.first;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const queue = new Queue();
