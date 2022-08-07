/**
 * @param {number} n
 * @return {number}
 */
// Time complexity - O(logn)
// Space complexity - O(logn)
var integerReplacement = function (n) {
    let cache = {};
    function getCount(number) {
        if (number === 1) return 0;
        if (number % 2 === 0) {
            cache[number] = 1 + getCount(number / 2);
        } else {
            cache[number] = Math.min(
                1 + getCount(number - 1),
                1 + getCount(number + 1)
            );
        }
        return cache[number];
    }
    return getCount(n);
};