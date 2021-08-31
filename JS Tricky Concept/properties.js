const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
// getting all properties names
const keys = Object.keys(bottle);
// console.log(keys);
// get all values 
const values = Object.values(bottle);
// console.log(values);

const pairs = Object.entries(bottle);
// console.log(pairs);
//seal -> can not delete values but can change object values
// Object.seal(bottle);
//freeze -> can not change or delete anything
Object.freeze(bottle);
bottle.price = 100;
bottle.height = 16;
// delete property
delete bottle.isCleaned;
console.log(bottle);