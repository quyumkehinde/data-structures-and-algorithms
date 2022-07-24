/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Time complexity - O(n^2)
// Space complexity
var canJump = function (nums) {
    let cantJump = [];
    function jump(index) {
        if (cantJump[index]) return false;
        if (index >= nums.length - 1) return true;
        if (nums[index] === 0) return false;
        for (let i = nums[index]; i > 0; i--) {
            if (jump(index + i)) {
                return true;
            }
            cantJump[index] = 'yes';
        }
        return false;
    }
    return jump(0);
};