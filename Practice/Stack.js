class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        if (this.length === 0) {
            this.bottom = newNode;
        }
        this.top = newNode;
        this.length++;
    }

    pop() {
        const prevTop = this.top
        if (!prevTop) return null;
        if (prevTop === this.bottom) {
            this.bottom = prevTop.next;
        }
        this.top = prevTop.next;
        this.length--;
        return prevTop;
    }

    isEmpty() {
        return this.top ? false : true;
    }
}

const myStack = new Stack();
myStack.push(1);
console.log(myStack);
console.log(myStack.peek());
myStack.pop();
console.log(myStack);
myStack.push(1);
myStack.push(2);
console.log(myStack);
console.log(myStack.isEmpty())

console.log('Array ////////////////////////////')

class Stack2 {
    constructor() {
        this.data = [];
        this.bottom = null;
        this.top = null;
    }

    peek() {
        return this.top;
    }

    push(value) {
        this.data.push(value);
        this.top = this.data[this.data.length - 1];
        this.bottom = this.data[0];
    }

    pop() {
        this.data.pop();
        if (this.data.length > 0) {
            this.top = this.data[this.data.length - 1];
            this.bottom = this.data[0];
        } else {
            this.top = null;
            this.bottom = null;
        }
    }

    isEmpty() {
        return this.data.length === 0;
    }
}

const myStack2 = new Stack2();
myStack2.push(1);
myStack2.push(2);
myStack2.push(3);
console.log(myStack2);
myStack2.pop();
console.log(myStack2)
console.log(myStack2.isEmpty())
// console.log(myStack.peek());
// myStack.pop();
// console.log(myStack);
// myStack.push(1);
// myStack.push(2);
// console.log(myStack);
// console.log(myStack.isEmpty())
