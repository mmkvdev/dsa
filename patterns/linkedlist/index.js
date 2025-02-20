class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let list = new Node("Hi");
list.next = new Node("there");
list.next.next = new Node("MMK!");
list.next.next.next = new Node("Cool !");

console.log({ list });
