const arr = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23,];
let count = 0;

function quickSort(array) {
    if (array.length <= 1) {
        return [];
    }

    let pivotIndex = Math.floor(array.length / 2); // опорный индекс
    let pivot = array[pivotIndex]; // опорный элемент
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (i === pivotIndex) {
            continue;
        }
        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log('length', arr.length);
console.log(quickSort(arr)); // O(log2n * n)
console.log('count = ', count);
