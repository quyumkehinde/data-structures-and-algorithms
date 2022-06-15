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
        if (typeof index !== 'number' || index >= this.length) {
            return 'Invalid index!';
        }
        if (index === 0) {
            return this.prepend(value);
        }
        let prevNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            prevNode = prevNode.next;
        }
        const newNode = new Node(value);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return newNode;
    }

    delete(index) {
        // if (!)
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
console.log(linkedList.toArray())
console.log('/////////')
console.log(linkedList.insert(1, 'Inserted at index 1'));
console.log(linkedList.toArray())
