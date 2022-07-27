
var RandomizedSet = function () {
    this.data = [];
    this.set = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.set[val]) {
        return false;
    }
    const index = this.data.push(val);
    this.set[val] = index;
    return true;

};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.set[val]) {
        return false;
    }
    const lastIndex = this.data.length - 1;
    const index = this.set[val] - 1;
    const temp = this.data[lastIndex];
    this.data[lastIndex] = this.data[index];
    this.data[index] = temp;
    this.set[temp] = index + 1;
    this.data.pop();
    delete this.set[val];

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let index = Math.floor(Math.random() * this.data.length);
    return this.data[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */