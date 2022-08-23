/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums);
    let result = 0;
    for (let num of numSet) {
        if (numSet.has(num - 1)) continue;
        let end = num + 1;
        while (numSet.has(end)) {
            end++;
        }
        result = Math.max(result, end - num);
    }
    return result;
};
