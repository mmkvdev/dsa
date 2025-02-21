// implementing stack using a linkedlist

// push and pop methods

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    } else {
      let tmp = this.first;
      this.first = this.first.next;
      this.size--;

      if (this.size === 0) {
        this.last = null;
      }
      return tmp.val;
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

const stack = new Stack();
