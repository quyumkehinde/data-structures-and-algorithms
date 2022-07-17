/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let count = {};
    for (let i = 0; i < nums.length; i++) {
        if (!count[nums[i]]) {
            count[nums[i]] = 0;
        }
        count[nums[i]]++
    }

    let keys = Object.keys(count);
    keys.sort((a, b) => {
        return a - b;
    });
    let result = null;
    let i = keys.length - 1, total = 0;
    while (i >= 0) {
        total += count[keys[i]];
        if (total >= k) {
            result = keys[i];
            break;
        }
        i--;
    }
    return result;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    nums.sort((a, b) => {
        return b - a;
    })
    return nums[k - 1];
};