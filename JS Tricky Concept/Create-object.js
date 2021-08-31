//1. using object literal
const student = {name: 'kazi', job: 'software engineer'};

//2. obj contructor
const person = new Object();

//3.
const human = Object.create(student);
// console.log(human.job);

//4. class synthetic suger
class People {
    constructor(name, age){
        this.name = name;
        this.age =age;
    }
}
const newPeople = new People('Manus', 23);
console.log(newPeople);

//5. function
function Manush(name){
     this.name = name;
}
const man = new Manush('kader');
console.log(man)
