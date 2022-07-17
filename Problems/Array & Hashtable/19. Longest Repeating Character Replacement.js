// https://leetcode.com/problems/longest-repeating-character-replacement/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let chars = {}, right = 0, left = 0, max = 0;
    while (right < s.length) {
        if (!chars[s[right]]) {
            chars[s[right]] = 0;
        }
        chars[s[right]]++;
        max = Math.max(max, chars[s[right]]);
        right++;
        if (right - left - max > k) {
            chars[s[left]]--;
            left++;
        }
    }
    return right - left;
};