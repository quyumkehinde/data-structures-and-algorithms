// https://leetcode.com/problems/count-and-say/
/**
 * @param {number} n
 * @return {string}
 */
// Space complexity - O(m)
// Time complexity - O(m*n)
// where m is the longest sequence length
var countAndSay = function (n) {
    if (n < 1) return "";
    let prev = "1";
    for (let i = 1; i < n; i++) {
        let curr = "";
        for (let j = 0, count = 1; j < prev.length; j++) {
            if (prev[j] === prev[j + 1]) {
                count++;
            } else {
                curr = curr + count + prev[j];
                count = 1;
            }
        }
        prev = curr;
    }
    return prev;
};
