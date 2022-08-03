/**
 * @param {number} x
 * @return {number}
 */
// TC - O(x)
// SC - O(1)
var mySqrt = function (x) {
    if (x < 2) return x;
    let prev = 0;
    for (let i = 1; i <= Math.floor(x / 2) + 1; i++) {
        if ((i * i) > x) return prev;
        if ((i * i) === x) return i;
        prev = i;
    }
};

/**
 * @param {number} x
 * @return {number}
 */
// TC - O(logx)
// SC - O(logx)
var mySqrt = function (x) {
    if (x < 2) return x;
    function root(start, end) {
        let mid = Math.floor((start + end) / 2);
        if (mid * mid > x) return root(start, mid - 1);
        if ((mid + 1) * (mid + 1) > x) {
            return mid;
        }
        return root(mid + 1, end);
    }
    return root(1, Math.floor(x / 2));
};
