class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.head;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.tail;
    }

    insert(index, value) {
        if (!this._validate(index)) return 'Invalid index';
        if (index === 0) return this.prepend(value);
        const prevNode = this.traverseToIndex(index - 1)
        const newNode = new Node(value);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return newNode;
    }

    remove(index) {
        if (!this._validate(index)) return 'Invalid index';
        if (index === 0) {
            const delNode = this.head
            this.head = delNode.next;
            return delNode;
        }
        const prevNode = this.traverseToIndex(index - 1);
        const delNode = prevNode.next;
        prevNode.next = delNode.next;
        this.length--;
        return delNode;
    }

    traverseToIndex(index) {
        if (!this._validate(index)) return undefined;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    reverse() {
        let head = this.head;
        const tail = head;
        let currentNode = head.next;
        while (currentNode) {
            const temp = currentNode.next;
            currentNode.next = head;
            head = currentNode;
            currentNode = temp;
        }
        tail.next = null;
        this.tail = tail;
        this.head = head;
        return this;
    }

    toArray() {
        let list = [];
        let currentNode = this.head;
        while (currentNode) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return list;
    }

    _validate(index) {
        if (typeof index !== 'number' || index >= this.length) {
            return false;
        }
        return true;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const linkedList = new LinkedList('hello');
console.log(linkedList.toArray())
linkedList.prepend('Hello prepend')
linkedList.prepend('Hello prepend 2')
linkedList.append('Hello append')
linkedList.toArray()
linkedList.insert(1, 'Inserted at index 1');
console.log(linkedList.toArray())
linkedList.remove(3)
console.log(linkedList.toArray())
console.log('///////////////////');
console.log(linkedList.reverse());

// console.log(linkedList.toArray())
// console.log(linkedList)
