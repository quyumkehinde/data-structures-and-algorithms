/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Time complexity - O(n^2)
// Space complexity
// PS: Solution doesn't pass all LC test cases.
var canJump = function (nums) {
    let jumpCache = {};
    function jump(index) {
        if (jumpCache[index]) return jumpCache[index];
        if (index >= nums.length - 1) return true;
        if (nums[index] === 0) return false;
        for (let i = nums[index]; i > 0; i--) {
            if (jump(index + i)) {
                return true;
            } else {
                jumpCache[index + i] = false;
            }
        }
        return false;
    }
    return jump(0);
};

// [20,1,1,1,1,0,0,0,0,0,0,0,0,0,0,5]