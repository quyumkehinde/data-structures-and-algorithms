/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let pathMap = {};
    function findPath(row, col) {
        if (pathMap[row + '-' + col]) return pathMap[row + '-' + col];
        if (row === m - 1 && col === n - 1) return 1;
        let res = 0;
        if (row < m - 1) {
            res += findPath(row + 1, col);
        }
        if (col < n - 1) {
            res += findPath(row, col + 1);
        }
        pathMap[row + '-' + col] = res;
        return res;
    }
    return findPath(0, 0);
};
