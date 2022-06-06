/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i];
        if (typeof map[remainder] !== 'undefined') {
            return [map[remainder], i];
        }
        map[nums[i]] = i;
    }
    return 'not found';
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
