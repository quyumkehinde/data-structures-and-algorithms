class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1;
    }

    prepend(value) {
        const newHead = new Node(value);
        const prevHead = this.head;
        prevHead.prev = newHead;
        newHead.next = prevHead;
        this.head = newHead;
        this.length++;
        return this.head;
    }

    append(value) {
        const newTail = new Node(value);
        const prevTail = this.tail;
        prevTail.next = newTail;
        newTail.prev = prevTail;
        this.tail = newTail;
        this.length++;
        return this.tail;
    }

    insert(index, value) {
        if (!this._validate(index)) return 'Invalid index';
        if (index === 0) return this.prepend(value);
        if (index === this.length - 1) return this.append(value);

        const oldNode = index > Math.floor(this.length / 2)
            ? this.traverseToIndexFromTail(index)
            : this.traverseToIndexFromHead(index);
        const newNode = new Node(value);
        newNode.next = oldNode;
        newNode.prev = oldNode.prev;
        oldNode.prev.next = newNode;
        oldNode.prev = newNode;
        this.length++;
        return newNode;
    }

    remove(index) {
        if (!this._validate(index)) return 'Invalid index';
        if (index === 0) {
            const delNode = this.head
            delNode.next.prev = null;
            this.head = delNode.next;
            return delNode;
        }
        const node = index > Math.floor(this.length / 2)
            ? this.traverseToIndexFromTail(index)
            : this.traverseToIndexFromHead(index);
        console.log(node)
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.length--;
        return node;
    }

    traverseToIndexFromHead(index) {
        if (!this._validate(index)) return undefined;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    traverseToIndexFromTail(index) {
        if (!this._validate(index)) return undefined;
        let currentNode = this.tail;
        for (let i = this.length - 1; i > index; i--) {
            currentNode = currentNode.prev;
        }
        return currentNode;
    }

    reverse() {

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
        this.prev = null;
    }
}

const linkedList = new LinkedList('hello');
linkedList.prepend('Hello prepend')
linkedList.prepend('Hello prepend 2')
linkedList.append('Hello append')
console.log(linkedList.toArray())
console.log('/////////')
console.log(linkedList.insert(1, 'Inserted at index 1'));
console.log(linkedList.toArray())
console.log('///////////////////////////////////')
linkedList.remove(3)
console.log(linkedList.toArray())