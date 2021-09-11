const numbers =[12, 33, 7, 45];
const student = {
      name: 'Kazi Ragib',
      age: 24,
      likes: ['cooking', 'games'] 
      //Here 'name', 'age', 'likes' object names  
};
// 1. Template String
const about = `My Name is ${student.name} age of ${student.age} has a number ${numbers[2]} who likes ${student.likes[0]}`; // showing name & likes properties dynamically
console.log(about);

// 2. arrow function
const getTen = () => 10; //Declare arrow function with no parameters
const addFive = num => num + 5; //Declare arrow function with one parameters
const isEven = x => x%2 == 0; //Check even with arrow function
const addThree = (a, b , c) => a + b + c; // Multiple parameter arrow function
const doMath = (num1, num2) => { // Multiline arrow function
      const substract = num1 - num2; 
      return substract;
}

// 3. Spread oparator
const newNumbers = [...numbers]; //check line 1, using ... inside array then 'numbers' to seperate them when push new value  
numbers.push(99);
numbers.push(100);

//create a new array from an older array and add an element
const currentNumbers = [...numbers, 20]; 

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);