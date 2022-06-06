/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const elements = {};
    for (let i = 0; i < nums.length; i++) {
        elements[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i];
        if (typeof elements[remainder] !== undefined && elements[remainder] !== i) {
            return [elements[remainder], i];
        }
    }
    return 'not found';
};

console.log([2, 7, 11, 15], 9);
console.log([3, 3], 6);
