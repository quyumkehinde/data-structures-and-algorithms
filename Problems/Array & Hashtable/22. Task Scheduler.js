/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// TC - O(n)
// SC - O(1)
var leastInterval = function (tasks, n) {
    let count = {}, max = 0, noOfMax = 0;
    for (let i = 0; i < tasks.length; i++) {
        let char = tasks[i];
        if (!count[char]) count[char] = 0;
        count[char]++;
        if (count[char] === max) noOfMax++;
        if (count[char] > max) {
            max = count[char];
            noOfMax = 1;
        }
    }
    let filled = noOfMax * max;
    let empty = (max - 1) * (n - noOfMax + 1);
    return Math.max(filled + empty, tasks.length);
};
