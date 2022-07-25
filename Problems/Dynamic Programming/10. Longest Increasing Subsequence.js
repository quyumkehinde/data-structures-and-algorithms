/**
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity - O(n * n^n) -> O(n^n)
// Space complexity - O(n)
var lengthOfLIS = function (nums) {
    let lisCache = {};
    function getLength(index, prev) {
        if (nums[prev] >= nums[index] && prev !== index) return 0;
        if (lisCache[index]) return lisCache[index];
        let length = 1;
        for (let i = index + 1; i < nums.length; i++) {
            length = Math.max(length, 1 + getLength(i, index));
        }
        lisCache[index] = length;
        return length;
    }
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, getLength(i, i));
    }
    return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity - O(n^2)
// Space complexity - O(n)
var lengthOfLIS = function (nums) {
    let max = 0, lis = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        lis[i] = 1;
        let curr = i + 1;
        while (curr < nums.length) {
            if (nums[curr] > nums[i]) {
                lis[i] = Math.max(lis[i], 1 + lis[curr]);
            }
            curr++;
        }
        max = Math.max(max, lis[i]);
    }
    return max;
};

