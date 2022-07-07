function factorial(num) {
    if (num < 1) return null;
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

function factorial2(num) {
    if (num < 1) return null;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// console.log(factorial(5))
// console.log(factorial2(5))


function fibonacci(n) {
    debugger;
    if (n < 0) return null;
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci2(n) {
    if (n < 0) return null;
    if (n < 2) return n;
    let prev1 = 0, prev2 = 1;
    for (let i = 2; i < n; i++) {
        let temp = prev2 + prev1;
        prev1 = prev2;
        prev2 = temp;
    }
    return prev1 + prev2;
}

// console.log(fibonacci(8));
// console.log(fibonacci2(8));

function reverseString(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function reverseString2(str) {
    str = str.split('');
    let result = '';
    function reverse(str) {
        // recursive case - there is at least one element in the str to br reverse
        if (str.length > 0) {
            result += str.pop();
            return reverse(str);
        }
        // base case - there are no elements in the str to reverse
        return result;
    }
    return reverse(str);
}

console.log(reverseString2('hello'))