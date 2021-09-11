//1. Array Distructuring\

const numbers = [10, 7];
//old way
// const a = numbers[0];
// const b = numbers[1];

//both same
// const [a, b] = [10, 7];

//also same
const [a, b] = numbers;

function box(num1, num2){ //take the function parameters and return as array
      const nums = [num1, num2];
      return nums;
}
//distructuring in function
// const [first, second] = [2, 4]
const [first, second] = box(2, 4);

// console.log(box(2, 4));

const student = {
      name: 'Kazi Ragib',
      age: 24,
      likes: ['cooking', 'games']  
};
//one way
// const [firstOne, secondOne] = ['cooking', 'games', 'football'] 

//2nd way
const [firstOne, secondOne] = student.likes; 

//2. Object Distructuring
//simple
const {name, age} = {name: 'Rafsan', age: 29}
const {name, age} = {name: 'Rafsan', age: 29, id: 4, salary: 50000}

const employee = {
      ide: 'VS Code',
      designation: 'Developer',
      machine: 'Mac',
      languages: ['javaScript', 'Es6', 'Html', 'Css3'],
      specification:{
            age: 24,
            height: '165cm',
            address: 'khulshi, Chittagong',
            mobile:{
                  brand: 'Xiomi Pocophone',
                  color: 'black',
                  price: 32500
            }

      }
}
const {machine, ide} = employee;
const {height, address} = employee.specification;
const {brand} = employee.specification.mobile;

const {price} = employee?.specification?.mobile; // if specification property is not available for any one of emplyee we can use '?' optional chaining
