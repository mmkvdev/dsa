// breadth first traversal of a binary tree

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

  bfs() {
    let visited = [],
      queue = [],
      currentNode = this.root;
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      visited.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return visited;
  }

  // tree cloning, prefix notation
  dfsPreOrder() {
    let visited = [];

    const traverse = (node) => {
      visited.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return visited;
  }

  // tree deletion, post fix notation (reverse polish notation)
  dfsPostOrder() {
    let visited = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };

    traverse(this.root);
    return visited;
  }

  // sorting a tree, used in BFS
  dfsInOrder() {
    let visited = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }
}

const tree = new BinarySearchTree();
// console.log(tree.insert(10));
// tree.print();
