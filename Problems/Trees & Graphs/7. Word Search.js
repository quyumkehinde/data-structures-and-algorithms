/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// Time complexity - O(i * j * 4^len(word))
// Space complexity - 4^len(word)
var exist = function (board, word) {
    let found = false;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] !== word[0]) continue;
            if (found) return found;
            check(i, j, 0);
        }
    }
    return found;
    function check(row, col, index) {
        if (index === word.length) {
            found = true;
            return;
        }
        if (col >= 0 && col < board[0].length && row >= 0 && row < board.length && board[row][col] === word[index]) {
            const char = word[index];
            board[row][col] = 0;
            check(row - 1, col, index + 1); // top
            check(row + 1, col, index + 1); // down
            check(row, col - 1, index + 1); // left
            check(row, col + 1, index + 1); // right
            board[row][col] = char;
        }
    }
};
