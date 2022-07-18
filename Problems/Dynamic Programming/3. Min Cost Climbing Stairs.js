/**
 * @param {number[]} cost
 * @return {number}
 */
// Time complexity - O(n)
// Space complexity - O(n)
var minCostClimbingStairs = function (cost) {
    let last = cost.length - 1;
    let costMap = {};
    function findCost(index) {
        if (index === last || index === last - 1) {
            return cost[index];
        }
        let firstCost = costMap[index + 1] ? costMap[index + 1] : findCost(index + 1);
        let secondCost = costMap[index + 2] ? costMap[index + 2] : findCost(index + 2);
        costMap[index] = Math.min(firstCost, secondCost) + cost[index];
        return costMap[index];
    }
    return Math.min(findCost(0), findCost(1));
};

/**
 * @param {number[]} cost
 * @return {number}
 */
// Time complexity - O(n)
// Space complexity - O(1)
var minCostClimbingStairs = function (cost) {
    for (let i = cost.length - 3; i >= 0; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    }
    return Math.min(cost[0], cost[1]);
};
