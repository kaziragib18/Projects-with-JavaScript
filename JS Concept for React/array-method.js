//Declared a array of object below
const products = [
      {name: 'laptop', price: 55000, brand: 'Hp', color: 'silver'},
      {name: 'Mobile', price: 75000, brand: 'Iphone', color: 'white'},
      {name: 'Headphone', price: 25000, brand: 'Bose', color: 'black'},
      {name: 'Watch', price: 3000, brand: 'Redmi', color: 'gray'},
      {name: 'Power Bank', price: 2000, brand: 'Xiomi', color: 'maroon'}
];
//take one property from object then store it in another array by using arrow function
//map to select a item to loop through them
brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

//  using foreach to loop though all properties because we dont need to return anything
products.forEach(product => console.log(product))

products.forEach(product => console.log(product.color))

products.forEach(product => console.log(product.name))

products.forEach(product => { // multiline forEach for ex. getElementById etc

})

// 3. filer - if condition gets fullfiled then return array
const cheap = products.filter(product => product.price <= 5000); // here if price is less then 5k find/filter the products in an array 

// console.log(cheap);

//filter name property with specfic value returns that/those object
const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

// 4. find - returns first thing it finds in property return the object and nothing else
const special = products.find(product => product.name.includes('n'));
console.log(special);


