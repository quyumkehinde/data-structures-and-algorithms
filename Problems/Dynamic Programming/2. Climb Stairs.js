/**
 * @param {number} n
 * @return {number}
 */
// Time complexity - O(n)
// Space complexity - O(n)
var climbStairs = function (n) {
    let stepsMap = {};
    function climb(steps) {
        if (steps < 3) {
            return steps;
        }
        let first = stepsMap[steps - 1] ? stepsMap[steps - 1] : climb(steps - 1);
        let second = stepsMap[steps - 2] ? stepsMap[steps - 2] : climb(steps - 2);
        stepsMap[steps] = first + second;
        return stepsMap[steps];
    }
    return climb(n);
};

/**
 * @param {number} n
 * @return {number}
 */
// Time complexity - O(n)
// Space complexity - O(1)
var climbStairs = function (n) {
    if (n < 3) return n;
    let lastTwoSteps = 1;
    let lastStep = 2;
    for (let i = 3; i < n; i++) {
        let temp = lastStep;
        lastStep = lastStep + lastTwoSteps;
        lastTwoSteps = temp;
    }
    return lastTwoSteps + lastStep;
};