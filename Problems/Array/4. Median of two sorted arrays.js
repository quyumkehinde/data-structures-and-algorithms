/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// Time complexity - O(a + b)
// Space complexity - O(a + b)
// where a and b are lenght of num1 and num2, respectively
var findMedianSortedArrays = function (nums1, nums2) {
    const isOdd = (number) => {
        return number % 2 !== 0;
    }

    const median = (array) => {
        if (isOdd(array.length)) {
            return array[(array.length - 1) / 2];
        }
        const index1 = array.length / 2;
        const index2 = index1 - 1;
        return (array[index1] + array[index2]) / 2;
    }

    if (nums1.length === 0) {
        return median(nums2);
    }

    if (nums2.length === 0) {
        return median(nums1);
    }

    let index1 = 0;
    let index2 = 0;
    const mergedArrayLength = nums1.length + nums2.length;
    const mergedArray = [];
    for (let i = 0; i < mergedArrayLength; i++) {
        if (nums1[index1] > nums2[index2] || typeof nums1[index1] === 'undefined') {
            mergedArray.push(nums2[index2]);
            index2++;
        } else {
            mergedArray.push(nums1[index1]);
            index1++;
        }
    }
    return median(mergedArray);
};

console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([2, 5], [0, 3, 6, 8])); // 4
