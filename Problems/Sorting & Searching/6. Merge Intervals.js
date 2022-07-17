/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// Time complexity - O(nlogn)
// Space complexity - O(r) where r is the length of our result
var merge = function (intervals) {
    let result = [];
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    result.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        const max = result[result.length - 1];
        const curr = intervals[i];
        if (curr[0] <= max[1]) {
            max[1] = Math.max(max[1], curr[1]);
        } else {
            result.push(curr);
        }
    }
    return result;
};
