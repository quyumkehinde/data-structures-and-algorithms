/**
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity - O(n)
// Space complexity - O(1)
var majorityElement = function (nums) {
    let count = 1, result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === result) {
            count++;
        } else if (count === 0) {
            result = nums[i];
            count = 1;
        } else {
            count--;
        }
    }
    return result;
};