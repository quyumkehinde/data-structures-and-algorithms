/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let decodeMap = {};
    function decode(index) {
        if (decodeMap[index]) return decodeMap[index];
        if (index > s.length || s[index] === '0') return 0;
        if (index === s.length) return 1;
        let result = decode(index + 1);
        if (Number(s.substring(index, index + 2)) <= 26) {
            result += decode(index + 2);
        }
        decodeMap[index] = result;
        return result;
    }
    return decode(0);
};
