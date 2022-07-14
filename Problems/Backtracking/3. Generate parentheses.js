// https://leetcode.com/problems/generate-parentheses/
/**
 * @param {number} n
 * @return {string[]}
 */
// Space complexity - O(n)
// Time complexity - O(2^n)
var generateParenthesis = function (n) {
    let result = [];
    function generate(value, open, close) {
        if (open === n && close === n) {
            result.push(value);
            return;
        }
        if (close < open) {
            generate(value + ')', open, close + 1);
        }
        if (open < n) {
            generate(value + '(', open + 1, close);
        }
    }
    generate('(', 1, 0);
    return result;
};
