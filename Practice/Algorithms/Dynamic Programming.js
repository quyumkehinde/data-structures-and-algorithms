// Time complexity - O(n)
// Space complexity - O(n)
function fibonacci(n) {
    let map = {};
    function getFibonacci(n) {
        if (n < 0) return null;
        if (n < 2) {
            return n;
        }
        if (map[n]) {
            return map[n];
        }
        map[n] = getFibonacci(n - 1) + getFibonacci(n - 2);
        return map[n];
    }
    return getFibonacci(n);
}