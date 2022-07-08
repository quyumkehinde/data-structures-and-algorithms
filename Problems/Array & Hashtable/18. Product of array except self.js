// https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Time complexity - O(n)
// Space complexity - O(n)
// Gets the left product and then multiply the right product on next iteration
var productExceptSelf = function (nums) {
    let result = [];
    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        result.push(left);
        left = left * nums[i];
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = right * result[i];
        right = right * nums[i];
    }

    return result;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Time complexity - O(n)
// Space complexity - O(n)
// Get the right products, get the left products, multiply those to get the result
var productExceptSelf = function (nums) {
    let result = [];
    let lhs = [];
    let left = 1;
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        lhs.push(left);
        left = left * nums[i];
    }

    let rhs = [];
    let right = 1;
    for (let i = length - 1; i >= 0; i--) {
        rhs.push(right)
        right = right * nums[i];
    }
    for (let i = 0; i < length; i++) {
        result.push(rhs[length - i - 1] * lhs[i]);
    }
    return result;
};
