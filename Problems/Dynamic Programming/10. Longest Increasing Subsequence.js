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


/**
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity - O(n^2)
// Space complexity - O(n)
var lengthOfLIS = function (nums) {
    let lis = [];
    function getLIS(prev, index) {
        if (lis[prev]) return lis[prev];
        if (index === nums.length) return 0;
        lis[prev] = getLIS(prev, index + 1);
        if (nums[index] > nums[prev] || prev === null) {
            lis[prev] = Math.max(lis[prev], 1 + getLIS(index, index + 1));
        }
        return lis[prev];
    }
    return getLIS(null, 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity - O(nlogn)
// Space complexity - O(n)
var lengthOfLIS = function (nums) {
    let res = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > res[res.length - 1]) {
            res.push(nums[i]);
        } else if (nums[i] === res[res.length - 1]) {
            continue;
        } else {
            const index = findIndex(nums[i]);
            res[index] = nums[i];
        }
    }
    return res.length;

    function findIndex(value) {
        let start = 0, end = res.length - 1;
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (value <= res[mid] && value > res[mid - 1]) {
                return mid;
            } else if (value > res[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return 0;
    }
};
