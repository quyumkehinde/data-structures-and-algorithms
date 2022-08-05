/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    if (numerator === 0) return "0";
    let num = Math.abs(numerator), den = Math.abs(denominator), str = '';
    str += Math.floor(num / den);
    let rem = num % den;
    let res = '.';
    let decMap = [];
    while (rem !== 0) {
        rem *= 10;
        while (rem < den) {
            rem *= 10;
            res += '0';
        }
        const val = Math.floor(rem / den);
        if (decMap[val + '-' + rem]) {
            res = res.substring(0, decMap[val + '-' + rem]) + '(' + res.substring(decMap[val + '-' + rem], res.length) + ')';
            break;
        }
        res += val;
        decMap[val + '-' + rem] = res.length - 1;
        rem = rem % den;
    }
    if (res.length > 1) str += res;
    if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)) {
        str = '-' + str;
    }
    return str;
};