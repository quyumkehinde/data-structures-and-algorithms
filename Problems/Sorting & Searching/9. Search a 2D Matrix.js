// https://leetcode.com/problems/search-a-2d-matrix/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let row = 0, col = matrix[0].length - 1;
    while (matrix[row][col] < target) {
        row++;
        if (row === matrix.length) {
            return false;
        }
    }
    while (col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        }
        col--;
    }
    return false;
};