// Input : arr[] = {1, 3, 2, 1, 4, 1}
// Output : 1
// 1 appears three times in array which
// is maximum frequency.

// Input : arr[] = {10, 20, 10, 20, 30, 20, 20}
// Output : 20

// A simple solution is to run two loops. The outer loop picks all elements one by one. The inner loop finds the frequency of the picked element and compares it with the maximum so far. The time complexity of this solution is O(n2)

// A better solution is to do the sorting. We first sort the array, then linearly traverse the array. 

const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j])
      m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }
  m = 0;
}
console.log(`${item} ( ${mf} times ) `);