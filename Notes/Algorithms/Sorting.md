# Sorting Algorithms

## Types of sort

- Comparison sort.
- Non-comparison sort.

## Comparison sorting algorithms

1. Bubble sort
2. Insertion sort
3. Selection sort
4. Merge sort
5. Quick sort

### 1. Bubble Sort

- **Time complexity - O(n^2)**
- **Space complexity - O(1)**

Compare and swap two node iteratively, repeat until all elements are sorted.

### 2. Insertion Sort

- **Time complexity - O(n^2)**
- **Space complexity - O(1)**

Iterate through the elements, switches the element in iteration to the left untill the value before it is smaller.

### 3. Selection Sort

- **Time complexity - O(n^2)**
- **Space complexity - O(1)**

Iterates through the elements in the array everytime to get and set the minimum value at every index in the array.

### 4. Merge Sort

- **Time complexity - O(nlogn)**
- **Space complexity - O(n)**

Merge the element using divide and conquer. Breaks the elements recursively and merge by comparin values of the left and right side.

## Non-comparison sorting algorithms

1. Counting sort.
2. Radix sort.

## Picking the right sorting Algorithm

- Insertion sort: Very few data / Items are mostly sorted.
- Bubble sort: Not recommended
- Selection sort: Not recommended
- Merge sort: Recommended for large data / not sorted data. (space complex)
- Quick sort: Recommended for large data when we can get a good pivot.

## Examples

- Sort 10 schools around your house by distance: insertion sort.

- eBay sorts listings by the current Bid amount: radix or counting sort.

- Sport scores on ESPN: quick sort.

- Massive database (can't fit all into memory) needs to sort through past year's user data: quick sort.

- Almost sorted Udemy review data needs to update and add 2 new reviews: insertion sort.

- Temperature Records for the past 50 years in Canada: merge sort.

- Large user name database needs to be sorted. Data is very random: merge sort.

- You want to teach sorting for the first time: insertion sort.
