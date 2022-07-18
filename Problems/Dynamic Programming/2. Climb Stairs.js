/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let stepsMap = {};
    function climb(steps) {
        if (steps === 1) {
            return 1;
        }
        if (steps === 2) {
            return 2;
        }
        if (steps === 0) {
            return 0;
        }
        let first = stepsMap[steps - 1] ? stepsMap[steps - 1] : climb(steps - 1);
        let second = stepsMap[steps - 2] ? stepsMap[steps - 2] : climb(steps - 2);
        stepsMap[steps] = first + second;
        return stepsMap[steps];
    }
    return climb(n);
};