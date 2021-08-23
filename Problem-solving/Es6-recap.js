// 1. let and const
const hubby = 'Omor Sani';
let phone = 'iphone 15';
phone = 'Samsung Galaxy S17';
// 2. default 
// 5. spread or three dots (...)
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);
// 3. template string
const myNotes = `I am mojnu of ${hubby}. I have a ${phone}.`
console.log(myNotes);

// 4. arrow function
// function square(x) {
//     return x * x;
// }
const square = x => x * x;
console.log(square(9));


// template-string

const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `kobita tumi sopno charini`;
const multiLine = 'This is my first line. \n' +
    'this is my second line.\n' +
    'third line text here\n' +
    'fourth line text here';

const multiLineNew = `this is is multi line
this is second line
this is third line
fourth line
`;
const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>'
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const old2 = `<h3 class="friend-name">Friend-${count}</h3>`;
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = 'This person name is ' + first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}. He lives in Dhaka.`;

console.log(fullNew);



//distructuring
const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '01717555555555', address: 'Chandpur', dress: 'silver' };

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;

// console.log(phone, price);
// console.log(phone, id);
// console.log(phone, dress);
// console.log(phone, price);
// console.log(phone);


const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food);