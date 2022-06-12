/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let chars = {};
    let longest = 0;
    let start = 0;

    if (s.length === 1) {
        return 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (typeof chars[s[i]] === 'number') {
            if (start <= chars[s[i]]) {
                start = chars[s[i]] + 1;
            }
        }
        chars[s[i]] = i;
        const subStrLength = i - start + 1;
        longest = Math.max(subStrLength, longest);
    }
    return longest;
};

console.log(lengthOfLongestSubstring('dedf'))
console.log(lengthOfLongestSubstring('abeefeba'))
