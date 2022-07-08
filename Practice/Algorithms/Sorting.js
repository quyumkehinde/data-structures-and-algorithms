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

console.log(insertionSort([23, 3, 49, 18, 01]))