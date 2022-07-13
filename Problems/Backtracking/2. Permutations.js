// https://leetcode.com/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Space complexity - O(n)
// Time complexity - O(n^2)
// where n is the nums of elements in nums
var permute = function (nums) {
    let result = [];
    function generate(value, data) {
        if (data.length === 0) {
            result.push(value);
            return;
        }
        for (let i = 0; i < data.length; i++) {
            let tempValue = [...value];
            tempValue.push(data[i]);
            let tempData = data.filter(num => {
                return num !== data[i];
            });
            generate(tempValue, tempData);
        }
    }
    generate([], nums);
    return result;
};