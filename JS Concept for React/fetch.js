//1. JSON - stringify, parse
const student = {
      name: 'Kazi Ragib',
      age: 24,
      likes: ['cooking', 'games']  
}
const studentJSON = JSON.stringify(student); //convert object to string with JSON.stringify()

console.log(student);
console.log(studentJSON); 

const studentObj = JSON.parse(studentJSON); //contert JSON string to js object with JSON.parse()
console.log(studentObj);

//2. fetch
fetch('url') //seturl of api
.then(res => res.json()) //convert respose to JSON then call ()
.then(data => console.log(data)); // you'll get data then u can send it to a function or simply see it in console, check how data was given in array or object

//keys, values
const keys = Object.keys(student);
const values = Object.values(student);

//forEach
const numbers = [2, 45, 56, 6, 64]
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in 

// add and remove from array
const products = [
      {name: 'laptop', price: 55000, brand: 'Hp', color: 'silver'},
      {name: 'Mobile', price: 75000, brand: 'Iphone', color: 'white'},
      {name: 'Headphone', price: 25000, brand: 'Bose', color: 'black'},
      {name: 'Watch', price: 3000, brand: 'Redmi', color: 'gray'},
      {name: 'Power Bank', price: 2000, brand: 'Xiomi', color: 'maroon'}
];

const newProduct = {name: 'Charger', price: 1200, brand: 'Samsumg', color: 'red'}
//copy products array and add newProduct
const newProduct = [...products, newProduct]; //spread operation

// create a new arry without one specific item
// for ex. remove Watch means create new array without the Watch
const remaing = products.filter(product =>product.name !=='Watch');
