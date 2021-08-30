/*data types
primitive data types
1. number
2. string
3. boolean
4. undefined
5. null
6. symbol

non-primitive
7. object
*/

//undefined/ null
/* 
1. variable value not assigned
2. function but didn't write return 
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. explicitly set value to undefined
*/

//
let first;
// console.log(first);
function second(x, y) {
    // document.getElementById('sum');

}
const result = second(3, 91);
// console.log(result);
function add(a, b) {
    const sum = a + b;

    if (b < 10) {
        return;
    }
    const fun = a * b;
    return sum;
}

const fourth = add(2, 7);
// console.log(fourth)
function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result;
}
double(81);

const fifth = { name: 'sogir', age: 15, location: 'bandarbon' };
// console.log(fifth.phone);

const sixth = [54, 12, 41, 31];
// console.log(sixth[4])
delete sixth[2];
// console.log(sixth[2]);

const seventh = undefined;
// console.log(seventh);

const myObj = { name: 'samad', profession: null }


 //call back
 function welcomeMessage(name, greetHandler) {
    greetHandler(name);
}
// const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise']
// const myObj = { name: 'Tom Chinku', age: 11 };
function greetMorning(name) {
    console.log('Good morning', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}
function greetAfternoon(name) {
    console.log('Good afternoon', name);
}
welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Sakib Hanks', greetAfternoon);
welcomeMessage('Bappa Raj', greetEvening);

function handleClick() {
    console.log('button is clicked');
}

document.getElementById('my-btn').addEventListener('click', handleClick)

document.getElementById('btn').addEventListener('click', function () {
    console.log('buttn is clicked');
})