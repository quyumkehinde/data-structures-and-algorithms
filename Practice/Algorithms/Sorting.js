function bubbleSort(arr) {
    let changed = true;
    while (changed) {
        changed = false;
        for (let i = 1; i < arr.length; i++) {
            let prev = i - 1;
            let curr = i;
            if (arr[prev] > arr[curr]) {
                temp = arr[curr];
                arr[curr] = arr[prev]
                arr[prev] = temp;
                changed = true;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([23, 3, 49, 18, 01]))



function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// console.log(selectionSort([23, 3, 49, 18, 01]))

function insertionSort(arr) {
    if (arr.length < 2) return arr;
    for (let i = 1; i < arr.length; i++) {
        let prev = i - 1;
        let curr = i;
        while (arr[curr] < arr[prev] && curr !== 0) {
            let temp = arr[curr]
            arr[curr] = arr[prev]
            arr[prev] = temp;
            curr--;
            prev--;
        }
    }
    return arr;
}

// console.log(insertionSort([23, 3, 49, 18, 1, 24]))



function mergeSolution(arr) {
    function merge(left, mid, right) {
        let leftArr = arr.slice(left, mid + 1);
        let rightArr = arr.slice(mid + 1, right + 1);
        let leftIndex = 0, rightIndex = 0, index = left;
        while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
            if (leftArr[leftIndex] < rightArr[rightIndex]) {
                arr[index++] = leftArr[leftIndex++];
            } else {
                arr[index++] = rightArr[rightIndex++];
            }
        }

        while (leftIndex < leftArr.length) {
            arr[index++] = leftArr[leftIndex++];
        }

        while (rightIndex < rightArr.length) {
            arr[index++] = rightArr[rightIndex++];
        }
    }

    function mergeSort(l, r) {
        if (l < r) {
            let mid = Math.floor((l + r) / 2);
            mergeSort(l, mid);
            mergeSort(mid + 1, r)
            merge(l, mid, r)
        }
    }
    if (arr.length < 2) return arr;
    mergeSort(0, arr.length - 1);
    return arr;
}

console.log(mergeSolution([23, 3, 49, 18, 1, 24, 21, 78, 2]))
