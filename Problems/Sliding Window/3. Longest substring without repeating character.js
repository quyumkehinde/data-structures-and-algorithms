// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */

// Time comlexity - O(n) 
// Space complecity - O(n)
// where n is the length of the string
var lengthOfLongestSubstring = function (s) {
    if (s.length < 2) return s.length;
    const chars = {};
    let max = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        if (typeof chars[s[i]] !== 'undefined' && chars[s[i]] >= start) {
            start = chars[s[i]] + 1;
        }
        chars[s[i]] = i;
        max = Math.max(max, i - start + 1);
    }
    return max;
};

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let longest = 0, left = -1, charSet = new Map();
    for (let i = 0; i < s.length; i++) {
        const prevIndex = charSet.get(s[i])
        if (prevIndex || prevIndex === 0) {
            left = Math.max(left, prevIndex);
        }
        charSet.set(s[i], i);
        longest = Math.max(longest, i - left);
    }
    return longest;
};

