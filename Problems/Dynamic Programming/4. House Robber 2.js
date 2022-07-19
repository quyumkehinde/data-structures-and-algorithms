/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    function robHelper(start, end) {
        let prev1 = 0, prev2 = 0;
        for (let i = start; i <= end; i++) {
            let temp = prev1;
            prev1 = Math.max(prev1, prev2 + nums[i]);
            prev2 = temp;
        }
        return prev1;
    }
    if (nums.length === 1) return nums[0];
    return Math.max(robHelper(0, nums.length - 2), robHelper(1, nums.length - 1));
};
