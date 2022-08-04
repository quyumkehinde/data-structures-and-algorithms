/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let res = 0, mul = 1;
    let div = Math.abs(dividend), temp = Math.abs(divisor), dis = Math.abs(divisor);
    while (div >= dis) {
        div -= dis;
        res += mul;
        dis += dis;
        mul += mul;
        if (dis > div && div >= temp) {
            dis = temp;
            mul = 1;
        }
    }
    const pMax = (2 ** 31) - 1, nMax = -(2 ** 31)
    if (divisor < 0) res = -res;
    if (dividend < 0) res = -res;
    if (res > pMax) return pMax;
    if (res < nMax) return nMax;
    return res;
};
