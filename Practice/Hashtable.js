class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        return this.data[this._hash(key)] = value;
    }

    get(key) {
        return this.data[this._hash(key)];
    }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 10000))
console.log(myHashTable.get('grapes'))
console.log(myHashTable.set('apples', 9))
console.log(myHashTable.get('apples'))
console.log(myHashTable.keys())
