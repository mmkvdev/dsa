class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    // if there is not root, the new node becomes the root
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val === current.value) return current;
      else if (val > current.value) {
        if (current.right === null) return false;
        else {
          if (current.right.value === val) return current;
          else current = current.right;
        }
      } else if (val < current.value) {
        if (current.left === null) return false;
        else {
          if (current.left.value === val) return current;
          else current = current.left;
        }
      }
    }
  }

  contains(val) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val === current.value) return true;
      else if (val > current.value) {
        if (current.right === null) return false;
        else {
          if (current.right.value === val) return true;
          else current = current.right;
        }
      } else if (val < current.value) {
        if (current.left === null) return false;
        else {
          if (current.left.value === val) return true;
          else current = current.left;
        }
      }
    }
  }

  print() {
    let current = this.root;

    while (current) {
      console.log(current.val);
      current = current.left;
    }
  }

  findSecondLargest() {
    let current = this.root;
    let parent = null;

    while (current.right) {
      parent = current;
      current = current.right;
    }

    // if the rightmost node has a left subtree, then the largest node in that subtree is our second largest element
    if (current.left) {
      let secondLargestNode = current.left;
      while (secondLargestNode.right) {
        secondLargestNode = secondLargestNode.right;
      }

      return secondLargestNode.value;
    }

    return parent.value;
  }
}

const tree = new BinarySearchTree();
// console.log(tree.insert(10));
// tree.print();
