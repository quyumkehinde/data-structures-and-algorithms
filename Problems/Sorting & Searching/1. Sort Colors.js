// https://leetcode.com/problems/sort-colors/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Time complexity - O(n^2)
// Space complexity - O(1)
var sortColors = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let curr = i;
        while (nums[curr] < nums[curr - 1] && curr !== 0) {
            const temp = nums[curr - 1];
            nums[curr - 1] = nums[curr];
            nums[curr] = temp;
            curr--;
        }
    }
};

// Time complexity - O(n)
// Space complexity - O(1)
var sortColors2 = function (nums) {
    let left = 0, right = nums.length - 1;
    let i = 0;
    while (i <= right) {
        if (nums[i] > 1) {
            const temp = nums[right];
            nums[right] = nums[i];
            nums[i] = temp;
            right--;
        } else if (nums[i] < 1) {
            const temp = nums[left];
            nums[left] = nums[i];
            nums[i] = temp;
            left++;
            i++;
        } else {
            i++;
        }
    }
    return nums;
};
