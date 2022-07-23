/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Time complexity - O(n*amount)
// Space complexity - O(amount) 
var coinChange = function (coins, amount) {
    if (amount === 0) return 0;
    let changeMap = {};
    function getCoins(remAmount) {
        if (changeMap[remAmount]) return changeMap[remAmount];
        if (remAmount < 0) return Number.POSITIVE_INFINITY;
        if (remAmount === 0) return 0;

        let min = Number.POSITIVE_INFINITY;
        for (let i = 0; i < coins.length; i++) {
            min = Math.min(min, 1 + getCoins(remAmount - coins[i]));
        }
        changeMap[remAmount] = min;
        return min;
    }
    const result = getCoins(amount);
    return result === Number.POSITIVE_INFINITY ? -1 : result;
};

// Time complexity - O(n*amount)
// Space complexity - O(amount) 
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let coinMap = { '0': 0 };
    for (let currAmount = 1; currAmount <= amount; currAmount++) {
        let min = Infinity;
        for (let i = 0; i < coins.length; i++) {
            const rem = currAmount - coins[i];
            if (rem < 0) continue;
            min = Math.min(min, 1 + coinMap[rem]);
        }
        coinMap[currAmount] = min;
    }
    return coinMap[amount] === Infinity ? -1 : coinMap[amount];
};