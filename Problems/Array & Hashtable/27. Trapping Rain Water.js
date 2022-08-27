/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let leftMax = [], rightMax = [];
    let prevLeft = 0, prevRight = 0;
    
    for (let i = 0; i < height.length; i++) {
        leftMax.push(prevLeft);
        rightMax[height.length - i - 1] = prevRight;
        prevLeft = Math.max(prevLeft, height[i]);
        prevRight = Math.max(prevRight, height[height.length - i - 1]);
    }
    
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        const water = Math.min(leftMax[i], rightMax[i]) - height[i];
        if (water > 0) result += water;
    }
    return result;
};
