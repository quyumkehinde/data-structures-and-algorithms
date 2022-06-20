// https://leetcode.com/problems/increasing-triplet-subsequence/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Time complexity - O(n) where n is the length of nums
// Space complrxity - O(1)
var increasingTriplet = function (nums) {
    if (nums.length < 3) return false;
    let first = Infinity, second = Infinity;
    let result = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= first) {
            first = nums[i];
        } else if (nums[i] <= second) {
            second = nums[i];
        } else {
            result = true;
            break;
        }
    }
    return result;
};
