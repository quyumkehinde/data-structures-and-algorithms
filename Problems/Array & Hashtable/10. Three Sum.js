// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// TIme complexity - 0(nlogn) + (O(n) * O(n)) -> O(n^2)
// Space complecirty - O(1)
var threeSum = function (nums) {
    let sums = [];
    nums.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        // if the current element [i] is same as previous, skip to avoid duplicates.
        // we know it's dupplicate will be located at [i - 1] because the array is sorted.
        if (nums[i] === nums[i - 1]) continue;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (nums[left] === nums[left - 1] && left - 1 !== i || sum < 0) {
                left++;
            } else if (nums[right] === nums[right + 1] || sum > 0) {
                right--;
            } else {
                sums.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
            }
        }
    }
    return sums;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])) //[[-1,-1,2],[-1,0,1]]