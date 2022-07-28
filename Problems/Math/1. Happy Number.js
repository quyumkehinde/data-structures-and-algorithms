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
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    function getSquare(num) {
        let arr = String(num).split('');
        let sum = 0, index = 0;
        while (index < arr.length) {
            sum += Number(arr[index]) ** 2;
            index++;
        }
        return sum;
    }

    let slow = getSquare(n), fast = getSquare(slow);
    while (fast !== 1) {
        if (fast === slow) return false;
        slow = getSquare(slow);
        fast = getSquare(getSquare(fast));
    }
    return true;
};
