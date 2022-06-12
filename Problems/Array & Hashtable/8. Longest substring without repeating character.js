/**
 * @param {string} s
 * @return {string}
 */
// https://leetcode.com/problems/longest-palindromic-substring/
var longestPalindrome = function (s) {
    let longest = 0;
    let result = "";

    const helper = (left, right, str) => {
        let result = ""
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            const length = right - left + 1;
            result = str.substr(left, length);
            left--;
            right++;
        }
        return result;
    }

    for (let i = 0; i < s.length; i++) {
        // Odd Palindrome
        const helperResultOdd = helper(i, i, s);

        if (helperResultOdd.length > longest) {
            longest = helperResultOdd.length;
            result = helperResultOdd;
        }

        // Even Palindrome
        const helperResultEven = helper(i, i + 1, s);

        if (helperResultEven.length > longest) {
            longest = helperResultEven.length;
            result = helperResultEven;
        }
    }
    return result;
};

console.log(lengthOfLongestSubstring('dedf')) // ded
console.log(lengthOfLongestSubstring('abeefeba')) // efe
console.log(lengthOfLongestSubstring('babad')) // bab