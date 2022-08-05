/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let change = a & b, res = a ^ b;
    while (change !== 0) {
        change = change << 1;
        let temp = res;
        res = res ^ change;
        change = temp & change;
    }
    return res;
};
