/**
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity - O(n)
// Space complexity - O(1)
var removeDuplicates = function (nums) {
    if (nums.length < 2) {
        return nums;
    }
    let prevIndex = 0;
    let uniqueIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[prevIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
        prevIndex++;
    }
    const uniqueLength = uniqueIndex + 1;
    return uniqueLength;
};

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
