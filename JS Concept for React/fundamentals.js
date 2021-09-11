// 1. how to declare a Variable using let and const

// const => is used when i dont have to change the value for the variable in future it will always be fixed. ex. your name
const fatherName = 'Rashed';

// let => is used when the value for the variable will change in future. ex. season, weather etc.
let weather = 'cloudy';
season = 'sunny';

// 2. Conditions
// 6 Basic Condition >, <, ===, !==, <=, >=
// Multiple Conditions: &&, ||
if(fatherName === 'rashed' || weather === 'cloudy'){

}
else if(fatherName === 'Rashed'){

}
else{

}

// 3. array declare
// index - find position , use it set element in arry
// length - find how many element
// push, pop
const numbers = [2, 32, 21, 13];
Number[0] = 56;

// 4. for loop
for(let i= 0; i <numbers.length; i++){
      const number = number[i];
      console.log(number);
}

//5. function
function multiply(num1, num2){ // name function 'multiply' - add parameters in (num1, num2)
      const result = num1 * num2;
      return result; //return function
}
const output = multiply(22, 34); // call the function

//6. Object
// 3 ways to access object property by name 
const student = {
      name: 'Kazi Ragib',
      age: 24,
      likes: ['cooking', 'games'] 
      //Here 'name', 'age', 'likes' object names  
}
const myVariable = 'age'; // property name 'age' declared with a variable 'myVariable'

console.log(student.age); // direct access by property name
console.log(student['age']);  // access by property name string
console.log(student[myVariable]);  // access by property name in a variable - const myVariable = 'age'; 