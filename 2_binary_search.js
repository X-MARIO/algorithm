const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let count = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle = 0;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
        count +=1;
        middle = Math.floor((start + end) / 2); // 15 / 2 = 7.5 ~ 7
        if (array[middle] ===  item) {
            found = true;
            position = middle;
            return position;
        }

        if (item < array[middle]) { // лева части
            end = middle - 1;
        } else { // правая часть
            start = middle + 1;
        }
    }

    return position;
}

console.log(binarySearch(array, 0));
console.log(`count = ${count}`);
