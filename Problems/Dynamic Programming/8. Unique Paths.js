/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// Time complexity - O(m*n)
// Space complexity - O(m*n)
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

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// Time complexity - O(m*n)
// Space complexity - O(n)
var uniquePaths = function (m, n) {
    let rowPaths = [], res = 0;
    for (let row = m - 1; row >= 0; row--) {
        let prev = 1;
        for (let col = n - 2; col >= 0; col--) {
            rowPaths[col] = rowPaths[col] ? rowPaths[col] : 0;
            rowPaths[col] += prev;
            prev = rowPaths[col];
        }
        res = prev;
    }
    return res;
};

