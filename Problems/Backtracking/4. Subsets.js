// https://leetcode.com/problems/subsets/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Space complexity - O(2^n)
// Time complexity - O(2^n)
var subsets = function (nums) {
    let result = [];
    function get(nums, subset) {
        if (nums.length === 0) {
            result.push(subset);
            return;
        }
        const value = nums.pop();
        get([...nums], [...subset, value]);
        get(nums, subset);
    }
    get(nums, []);
    return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Space complexity - O(2^n)
// Time complexity - O(2^n)
var subsets = function (nums) {
    let result = [];
    function get(i, subset) {
        if (i === nums.length) {
            result.push(subset);
            return;
        }
        get(i + 1, subset);
        get(i + 1, [...subset, nums[i]]);
    }
    get(0, []);
    return result;
};

console.log(subsets([1, 2, 3, 4, 5]))