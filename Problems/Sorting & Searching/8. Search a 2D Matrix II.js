// https://leetcode.com/problems/search-a-2d-matrix-ii/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// Time complexity - O(m+n)
// Space complexity - O(1)
var searchMatrix = function (matrix, target) {
    let row = 0, col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        }

        if (matrix[row][col] > target) {
            col--;
        } else {
            row++;
        }
    }
    return false;
};
