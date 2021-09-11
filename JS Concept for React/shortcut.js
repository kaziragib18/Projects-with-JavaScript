//ternary operation
const taka = 80;
let food;
if(taka >100){
      food = 'teheri' 
}
else{
      food = 'chips'
}

//using tarnary in upper code
let food1 = taka>100 ? 'teheri' : 'chips';
//here taka>100 is condition
// ? 'terehi' is inside if statement 'teheri'
// : 'chips' is else statement chips
console.log(food1);

let drink = (taka > 100 && myVar>100) ? 'coke' : 'water';
console.log(drink);


// number to string conversion
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr)

// string to number
const input = '560';
const inputNum = +input;
// console.log(inputNum);

 let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser(); 
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive;