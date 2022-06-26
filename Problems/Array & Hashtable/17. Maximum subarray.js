// https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 0) return 0;
    let max = nums[0];
    let prev = nums[0];
    for (let i = 1; i < nums.length; i++) {
        prev = Math.max(nums[i], nums[i] + prev);
        max = Math.max(prev, max);
    }
    return max;
};
