// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
// Time complexity - O(n^2) where n is the length of the string
// Space complexity - O(1)
var longestPalindrome = function (s) {
    let longest = 0;
    let longestStart = 0;
    for (let i = 0; i < s.length; i++) {
        let left = i, right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const length = right - left + 1;
            if (length > longest) {
                longest = length;
                longestStart = left;
            }
            left--;
            right++;
        }

        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const length = right - left + 1;
            if (length > longest) {
                longest = length;
                longestStart = left;
            }
            left--;
            right++;
        }
    }
    return s.substr(longestStart, longest);
};

console.log(longestPalindrome('dedf')) // ded
console.log(longestPalindrome('abeefeba')) // efe
console.log(longestPalindrome('babad')) // bab