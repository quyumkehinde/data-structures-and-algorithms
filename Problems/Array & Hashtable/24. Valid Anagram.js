/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// TC - O(s+t)
// SC - O(s)
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) map[s[i]] = 0;
        map[s[i]]++;
    }
    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]] || map[t[i]] === 0) return false;
        map[t[i]]--;
    }
    return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// TC - O(nlogn)
// SC - O(1)
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    if (s.split('').sort().join('') === t.split('').sort().join('')) {
        return true;
    }
    return false;
};