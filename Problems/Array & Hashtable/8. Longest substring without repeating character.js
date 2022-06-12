/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let chars = {};
    let longest = 0;
    let count = 0;

    if (s.length === 1) {
        return 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (typeof chars[s[i]] === 'number') {
            longest = Math.max(count, longest);
            i = chars[s[i]];
            count = 0;
            chars = {};
        } else {
            count++;
            chars[s[i]] = i;
            longest = Math.max(count, longest);
        }

    }
    return longest;
};

console.log(lengthOfLongestSubstring('dedf'))
