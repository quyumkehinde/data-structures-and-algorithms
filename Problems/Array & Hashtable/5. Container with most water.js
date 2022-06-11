// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */

// Time complexity - O(n)
// Space complexity - O(1)
var maxArea = function (height) {
    let right = height.length - 1;
    let left = 0;
    let max = 0;

    while (right > left) {
        let area = 0;
        if (height[left] > height[right]) {
            area = height[right] * (right - left);
            right--;
        } else {
            area = height[left] * (right - left);
            left++;
        }

        if (area > max) max = area;
    }
    return max;

};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
