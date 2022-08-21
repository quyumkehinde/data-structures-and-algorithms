/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let subCache = new Set();
    for (let i = 0; i < 9; i++) {
        let rowCache = new Set(), colCache = new Set();
        for (let j = 0; j < 9; j++) {
            let row = board[i][j], col = board[j][i];
            if (row !== '.') {
                if (rowCache.has(row)) return false;
                rowCache.add(row);
                
                const subIndex = (3 * Math.floor(i/3)) + Math.floor(j/3) + '-' + row;
                if (subCache.has(subIndex)) return false;
                subCache.add(subIndex);
            }
            
            if (col !== '.') {
                if (colCache.has(col)) return false;
                colCache.add(col);
            }
        }
    }
    return true;
};
