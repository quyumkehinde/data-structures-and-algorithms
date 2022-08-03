/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let baseChar = 'A'.charCodeAt(0) - 1;
    let length = columnTitle.length;
    let res = 0;
    for (let i = 0; i < length; i++) {
        res += ((columnTitle.charCodeAt(i) - baseChar) * Math.pow(26, length - i - 1));
    }
    return res;
};
