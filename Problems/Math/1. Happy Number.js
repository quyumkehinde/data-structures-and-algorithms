/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let map = {};
    let num = n;
    while (true) {
        let arr = String(num).split(''), index = -1;
        num = 0;
        while (++index < arr.length) {
            num += (Number(arr[index]) ** 2);
        }
        if (map[num]) return false;
        if (num === 1) return true;
        map[num] = true;
    }
    return false;
};
