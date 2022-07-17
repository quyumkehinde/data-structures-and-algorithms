/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let start = 0, end = nums.length - 1, result = null;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        let left = nums[mid - 1], right = nums[mid + 1];
        if (mid === 0) left = Number.NEGATIVE_INFINITY;
        if (mid === nums.length - 1) right = Number.NEGATIVE_INFINITY;

        if (nums[mid] > right && nums[mid] > left) {
            result = mid;
            break;
        } else if (nums[mid] > right) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return result;
};
