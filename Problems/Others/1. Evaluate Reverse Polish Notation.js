/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    if (tokens.length === 1) return tokens[0];
    let index = tokens.length - 1;
    return operate();

    function operate() {
        const evaluate = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => ~~(a / b),
        };
        let operation = tokens[index--];
        let second = evaluate[tokens[index]] ? operate() : tokens[index--];
        let first = evaluate[tokens[index]] ? operate() : tokens[index--];

        return evaluate[operation](Number(first), Number(second));
    }
};
