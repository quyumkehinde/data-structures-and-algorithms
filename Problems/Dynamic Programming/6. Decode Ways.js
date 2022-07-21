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

var numDecodings = function (s) {
    let prev1 = 1, prev2 = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '0') {
            prev2 = prev1;
            prev1 = 0;
            continue;
        }
        let curr = prev1;
        if (Number(s.substring(i, i + 2)) <= 26) {
            curr += prev2;
        }
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
};
