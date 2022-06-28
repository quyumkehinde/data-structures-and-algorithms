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