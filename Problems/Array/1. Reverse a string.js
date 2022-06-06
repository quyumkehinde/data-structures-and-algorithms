
function reverse(str) {
    if (typeof str !== String) {
        return;
    }
    if (str.length < 2) {
        return str;
    }
    const arr = str.split('');
    return arr.reverse().join('');
}

console.log(reverse('Hello world'));