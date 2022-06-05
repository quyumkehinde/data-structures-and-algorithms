const strings = ['a', 'b', 'c', 'd']

// access - O(1)
console.log(strings[1])

// push - O(1)
strings.push('e')
console.log(strings)

// pop - O(1)
strings.pop()
console.log(strings)

// insert - O(n)
strings.unshift('x')
console.log(strings)

// insert in middle - O(n)
strings.splice(2, 1, 'hi', 'hello');
console.log(strings)

class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    delete(index) {
        const item = this.data[index];
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.pop();
        this.length--;
        return item;
    }
}

const customArray = new MyArray;
console.log(customArray)
customArray.push('hi');
console.log(customArray)

customArray.pop();
console.log(customArray);

customArray.push('1');
customArray.push('2');
customArray.push('3');
customArray.push('4');
console.log(customArray);

console.log(customArray.delete(2));
console.log(customArray)
