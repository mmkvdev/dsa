class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push a val to the end of the list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    if (this.head !== null) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.head === null) {
      return undefined;
    }

    let newTail = this.head;
    let tmp = newTail.next;

    while (tmp && tmp.next) {
      tmp = tmp.next;
      newTail = newTail.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return newTail;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    if (this.head) {
      let tmp = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return tmp;
    }
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let ptr = 0;

    while (ptr !== index) {
      current = current.next;
      ptr++;
    }

    return current;
  }

  set(val, index) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    else {
      let newNode = new Node(val);
      let prevNode = this.get(index - 1);
      let tmp = prevNode.next;
      prevNode.next = newNode;
      newNode.next = tmp;
    }

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;

    if (index === 0) return !!this.shift(index);
    if (index === this.length - 1) return !!this.pop();
    else {
      let prunableNode = this.get(index);
      let prevNode = this.get(index - 1);

      prevNode.next = prunableNode.next;
      prunableNode.next = null;
    }

    this.length--;
    return true;
  }

  rotate(k) {
    if (k === 0 || this.length == 1 || k % this.length === 0) return this;

    let rotateBy = k % this.length;

    let newTailNode = this.get(rotateBy - 1);
    let newHeadNode = newTailNode.next;
    newTailNode.next = null;

    this.tail.next = this.head;
    this.head = newHeadNode;
    this.tail = newTailNode;

    return this;
  }

  print() {
    let current = this.head;
    console.log(current);
    while (current) {
      // console.log(current.val);
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push("calm down MMK!");
list.print();
// console.log('after popping an item: ');
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// list.print();

// console.log('after shifting an item: ');
// list.shift();
// list.shift();
// list.shift();
// list.shift();
// list.push('mmk')
// list.print();
// console.log('after pushing and shifting an item: ');
// list.shift();
// list.shift();
// list.print();

// list.unshift(5);
// list.unshift(15);
// list.print();
