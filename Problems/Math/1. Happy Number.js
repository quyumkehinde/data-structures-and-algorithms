/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let cycle = 0;
    let num = n;
    while (cycle++ < 6) {
        let arr = String(num).split(''), index = -1;
        num = 0;
        while (++index < arr.length) {
            num += (Number(arr[index]) ** 2);
        }
        if (num === 1) return true;
    }
    return false;
};
