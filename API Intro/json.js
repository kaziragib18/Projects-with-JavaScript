const user = { id: 11, name:'Kazi Ragib', job: 'Web Developer'};
const stringField = JSON.stringify(user);



// console.log(user);
// console.log(stringField);
const shop = {
    name: 'Burgerita',
    address: 'lalkhan bazar',
    profit: 10000,
    product: ['burger','fries', 'coke'],
    owner:{
        name: 'Kazi',
        profession: 'Chef'
    },
    isExpensive: false
}
const shopStringfield = JSON.stringify(shop);
// console.log(shop);
// console.log(shopStringfield.owner);
// const converted = JSON.parse(shopStringfield);
// console.log(converted.owner);
