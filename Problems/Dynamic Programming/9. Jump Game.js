/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Time complexity - O(n)
// Space complexity - O(n)
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


/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Time complexity - O(n)
// Space complexity - O(1)
var canJump = function (nums) {
    let target = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= target) {
            target = i;
        }
    }
    return target === 0 ? true : false;
};
