// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Time complexity - O(m*n) where m is the number of strings and n is the average length of string
// Space complecity - O(m) where m is the number of strings
var groupAnagrams = function (strs) {
    if (strs.length === 1) return [strs];
    const map = {};
    strs.forEach(str => {
        const sorted = str.split('').sort().join('');
        if (!map[sorted]) {
            map[sorted] = [];
        }
        map[sorted].push(str);
    })
    return Object.values(map);
};
