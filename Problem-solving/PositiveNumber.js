function findPositiveNumber(arr) {
    let positiveArray = [];
    for (const item of arr) {
        if (item < 0) {
            break;
        }
        else {
            positiveArray.push(item);
        }
    }
    return positiveArray;
}

let number = [1, 5, 2, 6, 3, 8, -7, 9, 4, 10, -4];
let positiveNumber = findPositiveNumber(number);
console.log(number);
console.log(positiveNumber);
