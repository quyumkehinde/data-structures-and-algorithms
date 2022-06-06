// Time complexity - O(3n) = O(n)
// Space complexity - Unknown
function reverse(str) {
    if (typeof str !== 'string') {
        return 'String Expected!';
    }
    if (str.length < 2) {
        return str;
    }
    const arr = str.split('');
    return arr.reverse().join('');
}

// Time complexity - O(n)
// Space complexity - 0(n!): Because str2 is being discarded for every iteration and a new one is created in the memory
function reverse2(str) {
    if (typeof str !== 'string') {
        return 'String Expected!';
    }
    if (str.length < 2) {
        return str;
    }
    let str2 = '';
    for (let i = str.length - 1; i >= 0; i--) {
        str2 += str[i];
    }
    return str2;
}

console.log(reverse('Hello World'));
console.log(reverse2('Hello World'));
