// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let result = [];
    // two pointers algorithm
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        } else {
            result = [left + 1, right + 1]
            break;
        }
    }
    return result;
};

console.log(twoSum([2, 7, 11, 15]), 9) // [1,2]
console.log(twoSum([2, 3, 4]), 6) // [1,3]
console.log(twoSum([-1, 0]), -1) // [1,2]
