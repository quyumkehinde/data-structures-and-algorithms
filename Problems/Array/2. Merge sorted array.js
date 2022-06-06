// Time complexity - O(a + b)
// Space complexity - O(a + b)
// where a is length of array1 and b is length of array 2
function mergeSortedArrays(array1, array2) {
    if (typeof array1 !== 'object' || typeof array2 !== 'object') {
        return 'Array Expected!';
    }
    if (array1 === []) {
        return array2;
    }
    if (array2 === []) {
        return array1;
    }
    const totalLength = array1.length + array2.length;
    let index1 = 0;
    let index2 = 0;
    let newArray = new Array(totalLength);
    for (let i = 0; i < totalLength; i++) {
        if (array1[index1] < array2[index2] || array1[index1] === array2[index2]) {
            newArray[i] = array1[index1];
            index1++;
        } else if (array1[index1] > array2[index2]) {
            newArray[i] = array2[index2];
            index2++;
        } else if (array1[index1] === undefined) {
            newArray[i] = array2[index2];
            index2++;
        } else {
            newArray[i] = array1[index1]
            index1++;
        }
    }
    return newArray;

}

console.log(mergeSortedArrays([1, 4, 6, 8, 9], [3, 5, 7]));
console.log(mergeSortedArrays([], [3]));
console.log(mergeSortedArrays([7], [3]));
console.log(mergeSortedArrays([7], '2'));
