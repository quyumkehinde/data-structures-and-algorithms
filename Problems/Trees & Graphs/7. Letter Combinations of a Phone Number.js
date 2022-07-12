// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
/**
 * @param {string} digits
 * @return {string[]}
 */
// Time complexity - O(abc)
// where a is the length of the digits, b is the average length of the characters, and c is the average length of the values array 
// Space complexity - O(n) where n is the length of the resulting array.
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };
    let values = map[digits[0]].split('');
    for (let i = 1; i < digits.length; i++) {
        let temp = [];
        for (let j = 0; j < map[digits[i]].length; j++) {
            for (let k = 0; k < values.length; k++) {
                temp.push(values[k] + map[digits[i]][j]);
            }
        }
        values = temp;
    }
    return values;
};