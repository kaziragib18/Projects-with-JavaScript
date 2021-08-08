//Largest number in an array
function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let myMax = findMax(myArr);
console.log("So the maximum number is:");
console.log(myMax);



//Snallest number in an array
function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let myMin = findMin(myArr);
console.log("So the minimum number is: ");
console.log(myMin);


//Sum of an array
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let mySum = findSum(myArr);
console.log("The Sum is: ");
console.log(mySum);


//find average of an array
function findAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

let myAvg = findAvg(myArr);
console.log("Average is: ");
console.log(myAvg);


//find odd number in an array
function findOdd(arr) {
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            odd.push(arr[i])
        }
    }
    return odd;
}

let myOdd = findOdd(myArr);
console.log("The odd Numbers is:");
console.log(myOdd);




//find Even number in an array
function findEven(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
    }
    return even;
}

let myEven = findEven(myArr);
console.log("*****ALL EVEN NUMBERS*****");
console.log(myEven);

//find Random number in an array
let myArr = [];
let n = 10;

for (let i = 0; i < n; i++) {
    myArr[i] = Math.round(Math.random() * 100);
}


// console.log("*****ALL ARRAY CONTENT*****");
// console.log(myArr);





