/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x;
    let prev = 0;
    for (let i = 1; i <= Math.floor(x / 2) + 1; i++) {
        if ((i * i) > x) return prev;
        if ((i * i) === x) return i;
        prev = i;
    }
};