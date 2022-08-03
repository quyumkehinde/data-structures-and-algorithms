/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;
    function pow(power) {
        if (power === 1) return x;
        let res = pow(Math.floor(power / 2));
        res *= res;
        if (power % 2 !== 0) res *= x;
        return res;
    }
    if (n < 0) {
        return 1 / pow(n * -1);
    }
    return pow(n);
};

