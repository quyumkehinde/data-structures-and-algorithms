/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Time complexity - O(nlogn)
// Space complexity - O(n)
var topKFrequent = function (nums, k) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }
    let keys = Object.keys(map);
    keys.sort((a, b) => {
        return map[b] - map[a];
    });

    return keys.slice(0, k);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Time complexity - O(n)
// Space complexity - O(n)
var topKFrequent = function (nums, k) {
    let map = new Map(), result = [];
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    let arr = [];
    for (let [key, value] of map) {
        arr[value] ? null : arr[value] = new Set();
        arr[value].add(key);
    }
    for (let i = arr.length - 1; i >= 0 && result.length < k; i--) {
        if (arr[i]) result.push(...arr[i]);
    }
    return result;
};

