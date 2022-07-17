/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            let left = mid, right = mid;
            while (nums[left - 1] === target) {
                left--;
            }
            while (nums[right + 1] === target) {
                right++;
            }
            return [left, right];
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return [-1, -1];
};