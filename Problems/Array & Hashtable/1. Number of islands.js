// https://leetcode.com/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
// Time complexity - O(mn)
// Space complexity - O(mn)
var numIslands = function (grid) {
    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                count++;
                setIsland(row, col);
            }
        }
    }
    return count;
    function setIsland(row, col) {
        if (row >= grid.length || row < 0 || col >= grid[0].length || col < 0 || grid[row][col] === '0') {
            return;
        }
        grid[row][col] = '0';

        setIsland(row, col - 1) // left
        setIsland(row, col + 1) // right
        setIsland(row - 1, col) // top
        setIsland(row + 1, col) // down

        return;
    }
};
