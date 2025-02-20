class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor () {
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

    pop () {
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

    shift () {
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
    
    unshift (val) {
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
    print () {
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
list.push('calm down MMK!');
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

list.unshift(5);
list.unshift(15);
list.print();