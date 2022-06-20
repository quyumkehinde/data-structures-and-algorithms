// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// this method simply keeps the zero cols and rows and use that later to modify the matrix
// Time complexity - O(m*n)
// Space complecity - 0(m+n)
var setZeroes = function (matrix) {
    const zeroRows = [];
    const zeroCols = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.push(i);
                zeroCols.push(j);
            }
        }
    }

    for (let i = 0; i < zeroRows.length; i++) {
        for (let j = 0; j < matrix[zeroRows[i]].length; j++) {
            matrix[zeroRows[i]][j] = 0;
        }
    }

    for (let i = 0; i < zeroCols.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][zeroCols[i]] = 0;
        }
    }
};


// this method makes use of the first row and column to keep track of the zero rows and columns

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Time complexity - O(m*n)
// Space complecity - 0(1)
var setZeroes = function (matrix) {
    let firstCol = 1;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                if (i !== 0) {
                    matrix[i][0] = 0;
                } else {
                    firstCol = 0;
                }
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = matrix.length - 1; i >= 0; i--) {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
            let rowCheck = matrix[i][0];
            if (i === 0) {
                rowCheck = firstCol;
            }
            if (matrix[0][j] === 0 || rowCheck === 0) {
                matrix[i][j] = 0;
            }
        }
    }
};
