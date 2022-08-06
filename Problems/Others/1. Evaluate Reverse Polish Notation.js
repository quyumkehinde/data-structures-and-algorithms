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

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    if (tokens.length === 1) return tokens[0];
    const evaluate = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => ~~(a / b),
    };

    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (evaluate[tokens[i]]) {
            let second = stack.pop(), first = stack.pop();
            let val = evaluate[tokens[i]](Number(first), Number(second));
            stack.push(val);
        } else {
            stack.push(tokens[i]);
        }
    }
    return stack.pop();
};

